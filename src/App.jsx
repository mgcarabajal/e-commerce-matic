import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import { NotificationProvider } from './notification/NotificationService'
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos! Todos los productos:" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoría filtrada: ' />} />
            <Route path='/item/:itemID' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
        </NotificationProvider>
      </BrowserRouter>

    </div>
   
  )
}

export default App 
