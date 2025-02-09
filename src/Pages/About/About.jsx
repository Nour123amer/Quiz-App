import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <>
     <div className='relative text-white bg-[#0492C2] text-left font-semibold h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 py-16 px-6 rounded-md'>
  
     QuizMaster is an interactive and engaging quiz app designed to test your knowledge across various categories. Whether you love general knowledge, science, history, or entertainment, this app has something for everyone
         <button onClick={()=>{
            navigate('/startpage')
         }} className='absolute right-4 bottom-14 flex gap-4 items-center bg-white text-[#0492C2] px-2 py-1 rounded-md font-bold ms-auto mt-16'> 
<p>Next</p>
<i className="fa-solid fa-arrow-right"></i>
          </button>
          </div>
        
    </>
  )
}
