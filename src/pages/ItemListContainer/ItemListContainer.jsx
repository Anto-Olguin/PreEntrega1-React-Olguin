import './styles.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';
import products from '../../components/Products/Products';

const ItemListContainer = () => {

return (
    <div>
        <h2>Productos</h2>
        <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;