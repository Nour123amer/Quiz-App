import React, { createContext, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LevelContext } from '../../Context/LevelContext/LevelContext';

export default function Levels() {
  const navigate = useNavigate();
  const {level ,setLevel} = useContext(LevelContext);

  const handleLevelChange = (e) =>{
    setLevel(e.target.id)
  }
  console.log(level);
  
  return (
   <>
    <div className='relative text-white bg-[#0492C2] flex flex-col h-[550px] md:w-1/3 lg:w-1/4 m-auto my-16 py-12 text-start px-6 rounded-md '>
   <h1 className='text-2xl mb-8 font-bold'>Select your level</h1>
   <div>
     <input type="radio" className='mr-2' name="" id="beginner"  onClick={handleLevelChange} value={level}  />
   <label htmlFor='beginner'>Beginner</label>
   </div>
  
<div>
  <input type="radio" className='mr-2'  name="" id="intermediate"  onClick={handleLevelChange} value={level}  />
   <label htmlFor='intermediate'>Intermediate</label>
</div>
   
<div>
     <input type="radio" className='mr-2'  name="" id="advanced"  onClick={handleLevelChange} value={level}  />
   <label htmlFor='advanced'>Advanced</label>
</div>


   <button onClick={()=>{ navigate('/question')}} className='absolute right-4 bottom-16 mb-10 mx-3 flex gap-4 items-center bg-white text-[#0492C2] px-2 py-1 rounded-md font-bold ms-auto '>
                    <p>Next</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
   </div>
   </>
  )
}
