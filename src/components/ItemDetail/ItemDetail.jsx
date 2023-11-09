import './styles.css';

const ItemDetail = ({ itemSelected }) => {
    return (
        <div className='card-container'>
            <h3 className='card-title'>{itemSelected?.title}</h3>
            <img src={itemSelected?.img} alt={itemSelected?.title} width={100}/>
            <div className='card-description'>
                <p>{itemSelected?.description}</p>
            </div>

            <p>${itemSelected?.price}</p>
        </div>
    );
};

export default ItemDetail;