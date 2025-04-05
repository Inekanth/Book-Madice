import React from 'react'
import { assets } from '../assets/assets'

const Contect = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-400'>
        <p>CONTECT <span className='text-gray-600 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-6 mb-28 text-sm '>
        <img className='w-full md:max-w-[480px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <b className='font-semibold text-lg text-gray-800'>OUR LOCATION</b>
          <p className='text-gray-600'>abcd, <br />cd49, aaa,<br />abc, Batticaloa.</p>
          <p className='text-gray-600'>Tel : +94 75 886 2460 <br />likanth168@gmail.com</p>
          <p className='font-semibold text-lg text-gray-800'>CAREER WITH US</p>
          <p className='text-gray-600'>Learn more about our terms and job openings</p>
          <button className='border bg-primary rounded-full text-white px-8 py-4 text-sm'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contect