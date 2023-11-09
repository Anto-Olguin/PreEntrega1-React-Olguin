import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img src='../../../public/images/logo.png' alt='Logo Pollila' width='100px'/>
            </div>
            <div className='titulo'>
                <h1>Miss Skull Shop</h1>
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/amigurumis'} className='category-button'>Amigurumis</Link>
                    </li>
                    <li>
                        <Link to={'/category/totebags'} className='category-button'>Totebags</Link>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    );
};

export default Navbar;