import React from 'react'
import { useNavigate } from 'react-router-dom'
// import image from './../assets/imgs/3.jpg'

export default function Intro() {
    const navigate = useNavigate();


    return (
        <>
            <div className='relative text-[#0492C2] shadow-xl  image flex flex-col h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 justify-center items-center rounded-md'>
                {/* <h2 className='mb-8 text-3xl font-bold'>QUIZ</h2>
                <p className='font-semibold'>Loading your experience.Please wait ...</p> */}


                <button onClick={()=>{ navigate('/about')}} className='absolute right-4 bottom-16 mb-10 mx-3 flex gap-4 items-center text-white bg-[#0492C2] px-2 py-1 rounded-md font-bold ms-auto '>
                    <p>Next</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    )
}
