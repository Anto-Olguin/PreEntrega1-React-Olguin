import './ItemCountStyles.css';

const ItemCount = ({ stock, count, setCount }) => {

    const onAdd = () => {
        if(count === stock) return;
        setCount(count + 1);
    };

    const onSubstract = () => {
        if(count === 0) return;
        setCount(count - 1);
    };
    return (
    <div className='contador'>
        {count === 0 ? null : <button className='botones' onClick={onSubstract}>-</button>}
        <span className='numero'>{count}</span>
        {count === stock ? null : <button className='botones' onClick={onAdd}>+</button>}
    </div>);
};

export default ItemCount;
