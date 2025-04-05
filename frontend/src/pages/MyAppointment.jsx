import React, { useContext } from 'react'
import Doctor from './Doctor'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p>My Appointments</p>
      <div>
        {doctors.slice (0,2).map((item,index) => (
          <div key={index}>

          </div>
        )) }
      </div>
    </div>
  )
}

export default MyAppointment