import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
import ThemeProvider from './context/ThemeProvider';
import CheckOut from './components/CheckOut/CheckOut';
function App() {

  return (
    <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:categoria/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;