
import Navbar from './commpnents/Navbar'
import Sidebar from './commpnents/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useEffect, useState } from 'react'
import Login from './commpnents/Login'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPromotion from './pages/AddPromotion'
import ListPromotion from './pages/ListPromotion'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {
  const [token,setToken]= useState(localStorage.getItem('token') ? localStorage.getItem('token'):'')
  useEffect(()=>{
    // const token = localStorage.getItem('token')
    // setToken(token)
    localStorage.setItem('token', token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer position="top-right" autoClose={5000} />
      {token === ''? <Login setToken={setToken} />  : 
      <>
      <Navbar setToken={setToken} />
      <hr/>
      <div className='flex w-full'>
        <Sidebar/>
        <div className='w=[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add token={token}/>}/>
            <Route path='/list' element={<List token={token}/>}/>
            <Route path='/add_promotion' element={<AddPromotion token={token}/>}/>
            <Route path='/list_promotion' element={<ListPromotion token={token}/>}/>
            <Route path='/orders' element={<Orders token={token}/>}/>
          </Routes>
        </div>
      </div>
      </>
      }
      
    </div>
  )
}

export default App
