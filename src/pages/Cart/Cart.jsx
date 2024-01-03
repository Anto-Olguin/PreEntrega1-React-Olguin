import './CartStyles.css';
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Item from "../../components/Item/Item";

const Cart = () => {
    const {products, clear, removeItem} = useContext(CartContext);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(products));
    }, [products]);

    return (
        <div>
            <h2>Tu carrito</h2>
            <button onClick={clear} className='clearButton'>Vaciar carrito</button>

            {products.length > 0 ?
            <div className='item-list-container'>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                    <Item
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        img={product.img}
                    />
                    <button onClick={() => removeItem(product.id)} className='erase'>Eliminar</button>
                    </div>
                );
            })}
        </div>: <h3 className='aviso'>No hay productos en el carrito</h3>
        }
        </div>
    );
};

export default Cart;
