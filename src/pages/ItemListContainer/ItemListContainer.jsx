import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './ItemListContainerStyles.css';
import ItemList from '../../components/ItemList/ItemList';
import { ThemeContext } from '../../context/ThemeContext';


const ItemListContainer = () => {
    const [filteredItems, setFilteredItems] = useState([]);
    const categoria = useParams().categoria;
    const colorTheme = useContext(ThemeContext);
    const { id } = useParams();

useEffect(() => {
        console.log('Categoria actual:', categoria);
    const productsRef = collection(db, 'products');
    //const querySnapshot = !id ? productsRef : query(productsRef, where('categoria', '==', id));
    const querySnapshot = categoria ? query(productsRef, where('categoria', '==', categoria)) : productsRef;

    getDocs(querySnapshot)
        .then((resp) => {
            const products = resp.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setFilteredItems(products);
    });

    }, [categoria, id]);

    useEffect(() => {
        console.log('Productos', filteredItems);
    }, [filteredItems]);

return (
    <div style={{ backgroundColor: colorTheme.theme === 'light' ? '#F1EAFF' : '#662549' }}>
        <h2>Productos</h2>
        <ItemList products={filteredItems}/>
    </div>
);
};

export default ItemListContainer;