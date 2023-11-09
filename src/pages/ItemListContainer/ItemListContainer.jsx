import './styles.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () => {

const products = [
    {
        id: 1,
        title: "Plushie Murcielago",
        description: "Plushie a crochet, relleno de fibra de poliester, con ojos de seguridad.",
        price: 3000,
        image: "/public/images/bat.png",
    },

    {
        id: 2,
        title: "Plushie Diablito",
        description: "Plushie a crochet, relleno de fibra de poliester, con ojos de seguridad.",
        price: 3000,
        image: "/public/images/devil.png",
    },

    {
        id: 3,
        title: "Plushie Jack O Lantern",
        description: "Plushie a crochet, relleno de fibra de poliester, con ojos de seguridad.",
        price: 3000,
        image: "/public/images/pumpkin-boy.png",
    },

    {
        id: 4,
        title: "Plushie Cabrita",
        description: "Plushie a crochet, relleno de fibra de poliester, con ojos de seguridad.",
        price: 3000,
        image: "/public/images/goat.png",
    },

    {
        id: 5,
        title: "Colgante Fantasmas",
        description: "Plushies colgantes a crochet, rellenos de fibra de poliester, con ojos de seguridad.",
        price: 3000,
        image: "/public/images/ghosts.png",
    },

    {
        id: 6,
        title: "Totebag Gatito",
        description: "Totebag en dos agujas, con forro interno de lino.",
        price: 2500,
        image: "/public/images/cat-tote.png",
    },

    {
        id: 7,
        title: "Totebag Fantasma",
        description: "Totebag en dos agujas, con forro interno de lino.",
        price: 2500,
        image: "/public/images/ghost-tote.png",
    },
    ];

return (
    <div>
        <h1>Item list container</h1>
        <ItemCount />
        <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;