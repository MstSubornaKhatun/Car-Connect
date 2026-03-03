import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Car from './pages/Car';
import MyBookings from './pages/MyBookings.JSX';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner') // http://localhost:5173/owner path a gele navbar dekha jabe na
  return (
    <>
     {!isOwnerPath && <Navbar ></Navbar> }

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<CarDetails/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
     </Routes>
    </>
  )
}

export default App