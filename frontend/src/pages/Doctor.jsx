import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Appointment from './Appointment';

const Doctor = () => {

  const { speciality } = useParams()
  const { doctors } = useContext (AppContext)
  const navigate = useNavigate ()

  const [filterDoc, setFilterDoc] = useState([])


  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))  
    }else
    setFilterDoc(doctors)
  }

  useEffect(()=> {
    applyFilter()
  },[doctors,speciality])

  return (
    <div >
        <p className='text-gray-600'>Browse throw the doctors</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col text-gray-700 gap-5 text-sm '>
          <p onClick={()=> speciality === 'General physician' ? navigate ('/doctor') : navigate ('/doctors/General physician')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "General physician" ? "bg-indigo-100" : "}'}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate ('/doctor') : navigate ('/doctors/Gynecologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100" : "}'}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate ('/doctor') : navigate ('/doctors/Dermatologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100" : "}'}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate ('/doctor') : navigate ('/doctors/Pediatricians')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100" : "}'}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate ('/doctor') : navigate ('/doctors/Neurologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100" : "}'}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate ('/doctor') : navigate ('/doctors/Gastroenterologist')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-full cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100" : "}'}>Gastroenterologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map (
              (item,index)=>(
                <div onClick={()=> { navigate(`/appointment/${item._id}`); scrollTo (0,0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50 ' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-700 rounded-full'></p> <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            )
            )
          }
        </div>
      </div>
    </div>
  )
  
  
}

export default Doctor