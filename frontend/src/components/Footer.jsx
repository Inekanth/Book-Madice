import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img className='mb-5 w-40' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-700 leading-7'>Look here some textt</p>
      </div>

      <div>
        <p className='text-2xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <li>Contect</li>
          <li>Career</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className='text-2xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <li>0758862460</li>
          <li>likanth168@gmail.com</li>
        </ul>
      </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2023@LikaSoul - All rigtht reserved.</p>
      </div>
    </div>
  )
}

export default Footer