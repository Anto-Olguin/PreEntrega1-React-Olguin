import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './styles.css';

const ItemList = ({products}) => {
    const { id } = useParams();
    return (
        <div className="item-list-container">
            {products.map((product) => (
            <Link to={"item/" + product.id} key={product.id} className='link'>
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