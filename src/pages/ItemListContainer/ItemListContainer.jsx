import './styles.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';
import products from '../../components/Products/Products';

const ItemListContainer = () => {

return (
    <div>
        <h2>Item list container</h2>
        <ItemCount />
        <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;