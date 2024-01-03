import './CartWidgetStyles.css';
import * as Icon from 'react-bootstrap-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { productQuantity } = useContext(CartContext);
    return (
        <div className='cart'>
            <Link to={'/cart'} className='link'>
            <Icon.Cart className='cart-icon'/>
            <div className='cart-count'>
                <span>
                    {String(productQuantity)}
                </span>
            </div>
            </Link>
        </div>
    );
};

export default CartWidget;