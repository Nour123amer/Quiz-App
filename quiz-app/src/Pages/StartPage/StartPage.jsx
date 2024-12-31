import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className='border bg-[#601A35] border-gray-500 container md:w-1/3 lg:w-1/4 m-auto my-16 flex flex-col h-[550px] justify-around rounded-md'>
    <h1 className=' w-3/4 mx-auto mt-12 mb-16 text-white font-bold italic text-2xl'>Let's start quiz</h1>

      <button onClick={()=>{
        navigate('/signup')
      }} className='text-[#601A35] bg-white w-3/4 mx-auto px-2 py-1 rounded-md mb-6 font-semibold'>Start Quiz</button>
    </div>
    </>
  )
}
