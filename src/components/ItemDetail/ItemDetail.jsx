import './styles.css';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(0);
    const stock = 6;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/cart');
    };
    return (
        <div className='card-container'>
            <h3 className='card-title'>{itemSelected?.title}</h3>
            <img src={itemSelected?.img} alt={itemSelected?.title} width={80}/>
            <div className='card-description'>
                <p>{itemSelected?.description}</p>
            </div>

            <span>Stock: {stock}</span>
            <p>${itemSelected?.price}</p>
            <div>
                <button onClick={handleNavigation}>Terminar mi compra</button>
                <ItemCount count={count} setCount={setCount} stock={stock}/>
            </div>
        </div>
    );
};

export default ItemDetail;