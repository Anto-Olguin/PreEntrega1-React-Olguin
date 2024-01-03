import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemListStyles.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchProducts = async () => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');

    try {
        const snapshot = await getDocs(productsCollection);

        const productsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setLoading(false);
        setProducts(productsData);
        console.log('Products:', productsData);
    } catch (error) {
        console.error('Error fetching products: ', error);
        setLoading(false);
    }
    };

    fetchProducts();
}, []);

return (
    <div className='item-list-container'>
        {loading ? (
        <p>Cargando productos...</p>
    ) : (
        products.map((product) => (
            <Link className='link' to={'item/' + product.id} key={product.id}>
            <Item
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.img}
            />
            </Link>
        ))
        )}
    </div>
);
};

export default ItemList;