import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Contect from './pages/Contect'
import About from './pages/About'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import Navbare from './components/Navbare'
import Footer from './components/Footer'
import Doctors from './pages/Doctor'

function App() {
  return (
    <div className='mx-4 sm:mx-[10]'>
      <Navbare/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='doctor' element={<Doctor/>} />
        <Route path='doctor/:speciality' element={<Doctor/>} />
        <Route path='contect' element={<Contect/>} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='my-appointment' element={<MyAppointment />} />
        <Route path='my-profile' element={<MyProfile />} />
        <Route path='appointment:docId' element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App