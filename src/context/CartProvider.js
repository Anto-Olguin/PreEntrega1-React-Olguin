import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);

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

        const updatedProducts = [...products, {...product, quantity}];
        setProducts(updatedProducts);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };

    const cantidadEnCarrito = () => {
        return products.reduce((acc, product) => acc + product.quantity, 0);
    }

    const precioTotal = () => {
        return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }

    const clear = () => {
        console.log('Vaciando el carrito...');
        setProducts([]);
        setProductQuantity(0);
        localStorage.removeItem('cartProducts');
        console.log('Carrito vacio');
    };

    const isInCart = (id) => {
        return products.some((product) => product.id === id);
    };

    const removeItem = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };

    useEffect(() => {
        const storedProducts = localStorage.getItem('cartProducts');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            fetchProductsFromFirestore().then((fetchedProducts) => {
                setProducts(fetchedProducts);
                localStorage.setItem('cartProducts', JSON.stringify(fetchedProducts));
            });
        }
    }, []);

    useEffect(() => {
        setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0));
    }, [products]);

    return (
        <CartContext.Provider value={{products, addItem, productQuantity, clear, removeItem, isInCart, cantidadEnCarrito, precioTotal}}>
        {children}
        </CartContext.Provider>
    );
};

export default CartProvider;