import './styles.css';

const Item = ({title, description, price, img}) => {
    return (
        <div className='card-container'>
            <h3 className='card-title'>{title}</h3>
            <img src={img} alt={title} width={80}/>
            <div className='card-description'>
                <p>{description}</p>
            </div>

            <p>${price}</p>
            </div>
    );
};

export default Item;