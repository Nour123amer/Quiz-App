import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Intro() {
    const navigate = useNavigate();


    return (
        <>
            <div className='text-white bg-[#601A40] flex flex-col h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 justify-center items-center rounded-md'>
                <h2 className='mb-8 text-3xl font-bold'>QUIZ</h2>
                <p>Loading your experience.Please wait ...</p>


                <button onClick={()=>{ navigate('/about')}} className=' mx-3 flex gap-4 items-center bg-white text-[#601A40] px-2 py-1 rounded-md font-bold ms-auto mt-16'>
                    <p>Next</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    )
}
