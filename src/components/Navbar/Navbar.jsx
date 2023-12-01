import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <a href='http://localhost:3000/' className='logo'>
                    <img src={logo} alt='Logo Pollila' width={100}/>
                </a>
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