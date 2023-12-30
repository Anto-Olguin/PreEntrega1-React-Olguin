import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './ItemListContainerStyles.css';
import ItemList from '../../components/ItemList/ItemList';
import { ThemeContext } from '../../context/ThemeContext';


const ItemListContainer = () => {

const [filteredItems, setFilteredItems] = useState([]);
const [titulo, setTitulo] = useState('Productos');
const { categoria } = useParams();
const colorTheme = useContext(ThemeContext);

useEffect(() => {
    const fetchProducts = async () => {
    const productsRef = collection(db, 'products');
    const q = categoria ? query(productsRef, where('categoria', '==', categoria)) : productsRef;

    try {
        const resp = await getDocs(q);

        setFilteredItems(
        resp.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        );
    } catch (error) {
        console.error('Error al obtener datos:', error);
        }
    };

    fetchProducts();
}, [categoria]);


return (
    <div style={{ backgroundColor: colorTheme.theme === 'light' ? '#F1EAFF' : '#662549' }}>
        <h2>{titulo}</h2>
        <ItemList productos={filteredItems} titulo={titulo} />
    </div>
);
};

export default ItemListContainer;