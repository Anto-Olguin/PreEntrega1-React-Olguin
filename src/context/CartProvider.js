import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import itemsVenta from "../components/Products/Products";

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    /* const saveInLocalStorage = (products) => {
        localStorage.setItem('products', JSON.stringify(products))
    }; */

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            const newProducts = itemsVenta.map((item) => {
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
        setProducts([]);
    };

    const isInCart = (id) => {
        return products.some((product) => product.id === id);
    };

    const removeItem = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };
    useEffect(() => {
        setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0), 0);
    }, [products]);

    return (
        <CartContext.Provider value={{products, addItem, productQuantity, clear, removeItem, isInCart}}>
        {children}
        </CartContext.Provider>
    );
};

export default CartProvider;