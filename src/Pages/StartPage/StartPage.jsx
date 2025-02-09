import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className=' bg-[#0492C2] container relative md:w-1/3 lg:w-1/4 m-auto my-16 flex flex-col h-[550px] justify-around rounded-md'>
    <h1 className=' w-3/4 mx-auto mt-12 mb-6 text-white font-bold italic text-2xl'>Let's start quiz</h1>

      <button onClick={()=>{
        navigate('/signup')
      }} className='text-[#0492C2] bg-white w-3/4 mx-auto px-2 py-1 rounded-md mb-6 font-semibold'>Start Quiz</button>
       <button 
           onClick={()=>navigate('/about')}
           className='text-left'><i className="fa-solid fa-arrow-left text-2xl  ml-4 absolute bottom-4 left-2 mt-6 font-bold  text-white"></i></button>
         
    </div>
    </>
  )
}
