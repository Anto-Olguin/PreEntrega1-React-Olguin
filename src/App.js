import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
import ThemeProvider from './context/ThemeProvider';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDdUDhjJskMcDM0JyWwMoWJHsRG8UwMRPw",
  authDomain: "miss-skull-shop.firebaseapp.com",
  projectId: "miss-skull-shop",
  storageBucket: "miss-skull-shop.appspot.com",
  messagingSenderId: "679777054877",
  appId: "1:679777054877:web:f85e3b53142f26cd426474"
};

const app = initializeApp(firebaseConfig);

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:id/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;