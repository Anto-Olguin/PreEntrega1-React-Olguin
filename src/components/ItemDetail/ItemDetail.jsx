import './ItemDetailStyles.css';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(0);
    const stock = 6;
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);

    const handleNavigation = () => {
        navigate('/cart');
    };

    const addToCart = () => {
        addItem(itemSelected, count);
    };

    return (
        <div className='detail-card-container'>
            <h3 className='card-title'>{itemSelected?.title}</h3>
            <img src={itemSelected?.img} alt={itemSelected?.title} width={80}/>
            <div className='card-description'>
                <p>{itemSelected?.description}</p>
            </div>

            <span>Stock: {stock}</span>
            <p>${itemSelected?.price}</p>
            <div>
                <button className='cardButton' onClick={handleNavigation}>Terminar mi compra</button>
                <button className='cardButton' onClick={addToCart}>Agregar al carrito</button>
                <ItemCount count={count} setCount={setCount} stock={stock}/>
            </div>
        </div>
    );
};

export default ItemDetail;