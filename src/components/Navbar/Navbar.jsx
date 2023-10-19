import './styles.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img alt='Logo Pollila' src={'./images/logo.png'} width='100px'/>
            </div>
            <div>
                <h1>Miss Skull Shop</h1>
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <button className='category-button'>Amigurumis</button>
                    </li>
                    <li>
                        <button className='category-button'>Totebags</button>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    );
};

export default Navbar;