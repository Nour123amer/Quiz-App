import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function QuestionCard({questionInfo ,goToNextPage ,goToPreviousPage, index ,handleScoreUpdate}) {
    const navigate = useNavigate();
    const [score ,setScore] = useState(0);
    const [selectedOption ,setSelectedOption] = useState('');
    const {question , options ,answer ,id} = questionInfo;


    function calcScore(){
        // if (selectedOption === answer){
        //     setScore(score+1);
        // }else{
        //     setScore(score);
        // }

        const isCorrect = selectedOption === answer ? 1 :0;
        handleScoreUpdate(isCorrect ,index);
        goToNextPage();

    }





  return (
    <>
    <div className='  p-4 rounded-md'>
        <h2 className='mb-4'>{question}</h2>
        <div>
            {options.map((option,index)=>{
            return   <div key={index}>

                <input className='ml-2'
                name={`${option}`}
                value={option}
                id={index}
                checked={selectedOption === option}
                onChange={(e)=>setSelectedOption(e.target.value)} type='radio' />
                <label htmlFor={index} className='ml-1'>{option}</label>
               </div>
            })}
        </div>
        {/* <p>{answer}</p> */}
        <button   disabled={!selectedOption} onClick={calcScore} className='bg-white text-[#0492C2] px-2 py-1 rounded-md font-semibold mt-4'>Submit Answer</button>
        
        {/* <p className='border-2 border-white text-white px-2 py-1 rounded-md mt-4 text-center my-4'>{`Score: ${score}`}</p> */}

      
        <div className='flex justify-between px-6 my-6 '>
         <button onClick={goToPreviousPage} className="text-white">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={goToNextPage} className="text-white">
          <i className="fa-solid fa-chevron-right"></i>
        </button>  
        </div> 
 

    </div>
    </>
  )
}
