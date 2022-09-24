import React from 'react'
import './App.css'
import Thali from './ReduxComponents/Thali'
import Header from './ReduxComponents/Header'
import Footer from './ReduxComponents/Footer'
import Checkout from './ReduxComponents/Checkout'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path='/' element={<Thali/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
