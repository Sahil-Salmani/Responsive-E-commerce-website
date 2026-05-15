import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Product from './Components/Product'
import ProductDetail from './Components/ProductDetail'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Purchase from './Components/Purchase'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setcart] = useState([]);


  return (
    <>
     <BrowserRouter>
    <Navbar cart={cart}/>
     <Routes>
      <Route path='/' element={<Product cart={cart} setcart={setcart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>}/>
       <Route path='/user/:id'  element={<ProductDetail cart={cart} setcart={setcart} />}/>
       <Route path='/Purchase' element={<Purchase/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
