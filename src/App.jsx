import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import confStore from './store/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Provider store={confStore}> 
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    </>
  )
}

export default App
