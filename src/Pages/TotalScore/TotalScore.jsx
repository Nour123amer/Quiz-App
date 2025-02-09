import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScoreContext } from '../../Context/ScoreContext/ScoreContext';

export default function TotalScore() {
    const navigate = useNavigate();
    const location = useLocation();
    const totalScore = location.state?.totalScore || 0;
    const {questions} = useContext(ScoreContext);
    console.log(questions.length);
    
  return (
    <>
    <div className=' text-white  bg-[#0492C2] relative container md:w-1/3 lg:w-1/4 m-auto my-16 px-4  h-[550px]  py-8 rounded-md'>
      <div className='flex justify-center items-center flex-col my-auto h-3/4'>
         <p className='italic font-bold text-2xl'>Quiz completed!</p>
       <p className='italic font-semibold text-2xl'>Your total score is : {totalScore} / {questions.length}</p>
      </div>
      

           <button 
           onClick={()=>navigate('/question')}
           className='text-left'><i className="fa-solid fa-arrow-left mt-2 text-2xl font-bold absolute bottom-4 left-2 text-white"></i></button>
    </div>


    </>
  )
}
