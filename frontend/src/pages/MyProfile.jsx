import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Login from './Login'

const MyProfile = () => {

    const [userData, setUserData] = useState({
      Name : "Ine",
      Image : assets.profile_pic,
      Email : "",
      Phone : "+94 758862460",
      address : {
        line1 : "Abcd",
        line2 : "dcba"
      },
      Gender : "Male",
      dob : '1999.02.14'
    })

    const [isEdit, setIsEdit] = useState(true)



  return (

    <div className='flex flex-col max-w-lg gap-2 text-sm'>
      <img className='w-60 rounded-full' src={userData.Image} alt="" />

      {
        isEdit ? <input className='bg-gray-50 text-3xl font-semibold max-w-60 mt-4' type="text" value={userData.Name} onChange={e => setUserData (prev => ({...prev,Name:e.target.value}))} /> : <p className='bg-gray-10 text-3xl font-semibold max-w-60 mt-4'>{userData.Name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email ID :</p>
          {
            isEdit ? <input className='text-blue-500 font-bold' type="text" value={userData.Email} onChange={e => setUserData (prev => ({...prev,Email:e.target.value}))} /> : <p>{userData.Email}</p>
          }
          
          <p className='font-medium'>Phone :</p>
          {
            isEdit ? <input className='bg-gray-100 max-w-52 ' type="text" value={userData.Phone} onChange={e => setUserData (prev => ({...prev,Phone:e.target.value}))} /> : <p className='text-blue-500'>{userData.Phone}</p>
          }
          
          <p className='font-medium'>address :</p>
          {
            isEdit 
            ? <p>
              <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={(e) => setUserData (prev => ({...prev,address:{...prev.address,line1: e.target.value}}))} />
                <br />
              <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={e => setUserData (prev => ({...prev,address:{...prev.address,line2: e.target.value}}))} />
            </p>
            : <p className='text-gray-500'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }

          <p className='font-medium'>Gender :</p>
          {
            isEdit 
            ? <select className='max-w-20 bg-gray-100' type="text" value={userData.Gender} onChange={(e) => setUserData (prev => ({...prev,Gender:e.target.value}))} >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.Gender}</p>
          }

          <p className='font-medium'>Birthday</p>
          {
            isEdit
            ? <input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={(e) => setUserData (prev => ({...prev,dob:e.target.value}))} />
            :
            <p className='text-gray-400'>{userData.dob}</p>
          }          
        </div>

        <div className='mt-10'>{
          isEdit 
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(true)}>Edit</button>
          }
          

        </div>
      </div>

    </div>
  )
}

export default MyProfile