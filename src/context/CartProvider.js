import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const fetchProductsFromFirestore = async () => {
        const productsRef = collection(db, 'products');
        const productsSnapshot = await getDocs(productsRef);

        const productsData = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return productsData;
    };

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            const newProducts = products.map((item) => {
                if(item.id === product.id) {
                    return {
                        ...item, quantity: item.quantity + quantity
                    };
                };
                return item;
            });
            setProducts(newProducts);
            return;
        };

        setProducts([...products, {...product, quantity}]);
    };

    const clear = () => {
       // console.log('Clearing the cart...');
        setProducts([]);
    };

    const isInCart = (id) => {
        return products.some((product) => product.id === id);
    };

    const removeItem = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    useEffect(() => {
        fetchProductsFromFirestore().then((fetchedProducts) => {
            setProducts(fetchedProducts);
        });
    }, []);

    useEffect(() => {
        // console.log('Cart updated:', products);
        setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0));
    }, [products]);

    return (
        <CartContext.Provider value={{products, addItem, productQuantity, clear, removeItem, isInCart}}>
        {children}
        </CartContext.Provider>
    );
};

export default CartProvider;