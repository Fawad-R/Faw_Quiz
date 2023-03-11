import React, { createContext, useReducer } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Questions from './Components/Questions'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Sec from './Pages/Sec'
import Error from './Pages/Error'
import { initialState } from './Components/reducer/UseReducer'
import { reducer } from './Components/reducer/UseReducer'
let latestContext= createContext();
const App = () => {
  // Creating context
   
   let [latestState,dispatchlatestState]=useReducer(reducer,initialState);
  return (
    <>

    <div>
    {/* <latestContext.pro > */}
    <latestContext.Provider value={{latestState,dispatchlatestState}}>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/question' element={<Questions/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Sec' element={<Sec/>} />
    <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </latestContext.Provider>
    </div>
    </>
  )
}

export default App
export {latestContext}