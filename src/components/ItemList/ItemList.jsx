import { Link, useParams, Routes, Route } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemListStyles.css';
import { useEffect, useState } from 'react';
import ItemDetailContainer from '../../pages/ItemDetailContainer/ItemDetailContainer';
import {getFirestore, getDocs, collection} from 'firebase/firestore';
//import {doc, getDoc} from 'firebase/firestore';
//import { db } from './configFirebase';


const ItemList = () => {
const { id } = useParams();
const [filteredItems, setFilteredItems] = useState([]);

//    useEffect(() => {
//        const product = doc(db, 'items', '1MJRCIJAtO9aU7AVADxJ')
//        getDoc(product).then((snapshot) => {
//                if(snapshot.exists()) {
//                    setFilteredItems({id: snapshot.id, ...snapshot.data()})
//                }
//        });
//    }, []);

//    useEffect(() => {
//        const db = getFirestore();
//        const productsQuery = collection(db, 'itemsVenta');
//        const itemsVenta = getDocs(productsQuery).then((querySnapshot) => {
//            console.log(querySnapshot);
//        })

//        if (!id) {
//            setFilteredItems(itemsVenta);
//        } else {
//            const filtered = itemsVenta.filter((product) => product.category === id);
//        setFilteredItems(filtered);
//        }
//    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const db = getFirestore();
            const productsQuery = collection(db, 'products');
            const querySnapshot = await getDocs(productsQuery);

            const itemsVenta = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));

            if (!id) {
            setFilteredItems(itemsVenta);
            } else {
            const filtered = itemsVenta.filter((product) => product.category === id);
            setFilteredItems(filtered);
            }
        } catch (error) {
            console.error('Error al obtener datos:', error);
            setFilteredItems([]);
        };
        };

        fetchData();
    }, [id]);

    return (
        <div className='item-list-container'>
            {filteredItems.map((product) => (
            <Link to={'item/' + product.id} key={product.id} className='link'>
                <Item
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.img}
                />
            </Link>
))};

            <Routes>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            </Routes>

        </div>
    );
};

export default ItemList;