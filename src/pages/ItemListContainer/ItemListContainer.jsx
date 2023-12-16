import './ItemListContainerStyles.css';
import ItemList from '../../components/ItemList/ItemList';
import itemsVenta from '../../components/Products/Products';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

    const ItemListContainer = () => {
    const colorTheme = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: colorTheme.theme === 'light' ? '#F1EAFF' : '#662549',
        }}>
            <h2>Productos</h2>
            <ItemList products={itemsVenta} />
        </div>
    );
};

export default ItemListContainer;