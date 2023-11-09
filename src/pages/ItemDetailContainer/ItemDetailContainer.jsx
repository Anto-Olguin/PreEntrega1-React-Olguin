import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import products from '../../components/Products/Products';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const fetchProduct = () => {
        const selectedProduct = products.find((p) => p.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <ItemDetail itemSelected={product} />
        </div>
    );
};

export default ItemDetailContainer;