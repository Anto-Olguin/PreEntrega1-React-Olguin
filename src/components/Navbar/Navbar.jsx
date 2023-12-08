import './NavbarStyles.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

    const Navbar = () => {
        const { setTheme } = useContext(ThemeContext);
        return (
            <div className='navbar-container'>
                <div>
                    <a href='http://localhost:3000/' className='logo'>
                    <img src={logo} alt="Logo Pollila" width={100} />
                    </a>
                    <button className='themeButton' onClick={() => setTheme((currentValue) => currentValue === 'light' ? '#662549' : '#F1EAFF')}>Tema</button>
                </div>
                <div className='titulo'>
                    <h1>Miss Skull Shop</h1>
                </div>
                <div>
                    <ul className='list-container'>
                    <li>
                        <NavLink activeclassname='active' to={'/category/amigurumis'} className='category-button'>Amigurumis</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='active' to={'/category/totebags'} className='category-button'>Totebags</NavLink>
                    </li>
                    </ul>
                </div>

                <CartWidget/>
            </div>
        );
    };

export default Navbar;
