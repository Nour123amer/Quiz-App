import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <>
     <div className='text-white bg-[#601A40] text-left font-semibold h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 py-16 px-6 rounded-md'>
  
        Web development is the work involved in developing a website for the Internet (World Wide Web) 
        or an intranet (a private network).[1] Web development can range from developing a simple
         single static page of plain text to complex web applications, electronic businesses...
         <button onClick={()=>{
            navigate('/startpage')
         }} className='flex gap-4 items-center bg-white text-[#601A40] px-2 py-1 rounded-md font-bold ms-auto mt-16'> 
<p>Next</p>
<i className="fa-solid fa-arrow-right"></i>
          </button>
          </div>
        
    </>
  )
}
