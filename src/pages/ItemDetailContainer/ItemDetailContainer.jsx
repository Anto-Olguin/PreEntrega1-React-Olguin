import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import itemsVenta from '../../components/Products/Products';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({itemsVenta});
    const { id } = useParams();

    const fetchProduct = () => {
        const selectedProduct = itemsVenta.find((p) => p.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            {product &&
                <ItemDetail itemSelected={product} />
            }
        </div>
    );
};

export default ItemDetailContainer;