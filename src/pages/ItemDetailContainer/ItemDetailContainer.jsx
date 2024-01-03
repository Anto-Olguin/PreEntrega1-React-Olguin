import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const fetchProduct = async () => {
        const productRef = doc(db, 'products', id);

        try {
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                setProduct({
                    id: productDoc.id,
                    ...productDoc.data(),
                });
            } else {
                // console.error('Producto no encontrado');
            }
        } catch (error) {
            // console.error('Error al obtener el producto:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div>
            {product &&
                <ItemDetail itemSelected={product} />
            }
        </div>
    );
};

export default ItemDetailContainer;