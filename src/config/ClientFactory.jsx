import {doc, getDoc} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './configFirebase';

const ClientFactory = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const products = doc(db, 'items', '1MJRCIJAtO9aU7AVADxJ')
        getDoc(products).then((snapshot) => {
                if(snapshot.exists()) {
                    setItem({id: snapshot.id, ...snapshot.data()})
                }
        });
    }, []);




return {
    item,
}
}

export default ClientFactory;