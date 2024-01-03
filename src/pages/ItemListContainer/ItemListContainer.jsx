import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './ItemListContainerStyles.css';
import ItemList from '../../components/ItemList/ItemList';
import { ThemeContext } from '../../context/ThemeContext';


const ItemListContainer = () => {

const [filteredItems, setFilteredItems] = useState([]);
const { categoria } = useParams();
const colorTheme = useContext(ThemeContext);

useEffect(() => {
    const fetchProducts = async () => {
        // console.log('Categoría actual:', categoria);
    const productsRef = collection(db, 'products');
    const q = categoria ? query(productsRef, where('category', '==', categoria)) : productsRef;

    try {
        const resp = await getDocs(q);
        // console.log('Respuesta de Firestore:', resp.docs.map(doc => doc.data()));

        setFilteredItems(
            resp.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        );
    } catch (error) {
        // console.error('Error al obtener datos:', error);
        }
    };

    fetchProducts();
}, [categoria]);


return (
    <div style={{ backgroundColor: colorTheme.theme === 'light' ? '#F1EAFF' : '#662549' }}>
        <h2>Productos</h2>
        <ItemList productos={filteredItems}/>
    </div>
);
};

export default ItemListContainer;