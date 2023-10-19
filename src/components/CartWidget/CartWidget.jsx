import './styles.css';
import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <div className='cart'>
            <Icon.Cart className='cart-icon'/>
            <div className='cart-count'>
                <span>4</span>
            </div>
        </div>
    );
};

export default CartWidget;