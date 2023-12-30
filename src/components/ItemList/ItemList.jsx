import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemListStyles.css';

const ItemList = ({products}) => {
    return (
        <div className='item-list-container'>
            {products.map((product) => (
            <Link to={'item/' + product.id} key={product.id}>
                <Item
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.img}
                />
            </Link>
            ))};
        </div>
    );
};

export default ItemList;