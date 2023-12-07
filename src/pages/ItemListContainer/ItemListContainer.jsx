import './styles.css';
import ItemList from '../../components/ItemList/ItemList';
import products from '../../components/Products/Products';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

    const ItemListContainer = () => {
    const colorTheme = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: colorTheme.theme === 'light' ? '#F1EAFF' : '#662549',
        }}>
            <h2>Productos</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;