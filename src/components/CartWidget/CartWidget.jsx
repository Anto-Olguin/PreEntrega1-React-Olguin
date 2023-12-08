import './CartWidgetStyles.css';
import * as Icon from 'react-bootstrap-icons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { productQuantity } = useContext(CartContext);
    return (
        <div className='cart'>
            <Icon.Cart className='cart-icon'/>
            <div className='cart-count'>
                <span>
                    {productQuantity}
                </span>
            </div>
        </div>
    );
};

export default CartWidget;