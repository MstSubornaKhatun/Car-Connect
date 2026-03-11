import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Car from './pages/Car';
import MyBookings from './pages/MyBookings.JSX';
import Footer from './pages/Footer';
import Layout from './pages/owner/layout';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBookings from './pages/owner/ManageBookings';
import Login from './components/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // login modal control

  const isOwnerPath = useLocation().pathname.startsWith('/owner') // http://localhost:5173/owner path a gele navbar dekha jabe na

  /*
useLocation() 
--> react-router-dom hook.
--> It gives current url information
--> (url change -> component re-render -> new location)


.pathname 
--> string
--> url path


.startsWith('/owner')
--> JavaScript method
--> Syntax: string.startsWith(searchValue)
--> it check string ki nirdisto text diye start hoyeche kina.


"/owner".startsWith("/owner") ----> Result → `true`

"/owner/add-car".startsWith("/owner" ----> Result → `true`


"/car".startsWith("/owner") ----> Result → `false`


const isOwnerPath = useLocation().pathname.startsWith('/owner')
--> current url
--> pathname -> ber koro
--> /owner -> diye suru hoyeche kina 
--> hole -> true
--> nahole -> false



---> if user /owner related page -> then not show Navbar
---> but if another page -> then show Navbar
  
  */ 
  
  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin} />}
     {!isOwnerPath && <Navbar ></Navbar> }
     {/* if open owner dashboard then hide navbar */}

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<CarDetails/>}/> {/* dynamic ID route */}
      <Route path='/cars' element={<Car/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>

      <Route path='/owner' element={<Layout/>} >
        <Route index element={<Dashboard/>} />
        <Route path='add-car' element={<AddCar />} />
        <Route path='manage-cars' element={<ManageCars />} />
        <Route path='manage-bookings' element={<ManageBookings />} />
      
      
      </Route>
      
      
     </Routes>
     {!isOwnerPath && <Footer/>}

     
    </>
  )
}

export default App