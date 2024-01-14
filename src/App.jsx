import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
      <NavBar /> 
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos! Todos los productos:"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoría filtrada: '/>} />
        <Route path='/item/:itemID' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
       </BrowserRouter>
     
    </div>
   
  )
}

export default App 
