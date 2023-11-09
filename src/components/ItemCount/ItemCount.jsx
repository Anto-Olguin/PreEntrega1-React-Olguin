import { useState } from "react";
import './styles.css';

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const stock = 5;

    const onAdd = () => {
        if(count === stock) return;
        setCount(count + 1);
    };

    const onSubstract = () => {
        if(count === 0) return;
        setCount(count - 1);
    };
    return (
    <div className="contador">
        <button className="botones" onClick={onSubstract}>-</button>
        <span className="numero">{count}</span>
        <button className="botones" onClick={onAdd}>+</button>
    </div>);
};

export default ItemCount;
