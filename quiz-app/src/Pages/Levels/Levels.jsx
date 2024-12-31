import React from 'react'
import { Link } from 'react-router-dom'


export default function Levels() {
  return (
   <>
    <div className='text-white bg-purple-800 flex flex-col h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 py-12 text-start px-6 rounded-md '>
   <h1 className='text-2xl mb-8 font-bold'>Select your level</h1>
   <ul className='font-bold'>
   <li className='mb-4'> <Link to=''>Beginner</Link></li>
  <li className='mb-4'>  <Link to=''>Intermediate</Link></li>
   <li> <Link to=''>Advanced</Link></li>
   </ul>
   </div>
   </>
  )
}
