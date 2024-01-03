import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const CheckOut = () => {

    const [compraId, setCompraId] = useState('');
    const {products, clear, precioTotal} = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: products,
            total: precioTotal()
        };
        console.log(pedido);

        const pedidosRef = collection(db, 'compras');

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setCompraId(doc.id);
                clear();
            });
    };

            if (compraId) {
                return (
                    <div className='container'>
                        <h2>¡Gracias por comprar!</h2>
                        <p>Tu identificador de pedido es: {compraId}</p>
                    </div>
                );
            };

    return (
        <div className='container'>
        <h2>Finalizar compra</h2>
        <form className='form' onSubmit={handleSubmit(comprar)}>

            <input type='text' placeholder='Ingresá tu nombre' {...register('nombre')} />
            <input type='email' placeholder='Ingresá tu e-mail' {...register('email')} />
            <input type='phone' placeholder='Ingresá tu teléfono' {...register('telefono')} />

            <button className='enviar' type='submit'>Comprar</button>

        </form>
    </div>
    );
};

export default CheckOut;