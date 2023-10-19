import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenido!'/>
    </div>
  );
}

export default App;