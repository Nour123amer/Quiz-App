import React, { useEffect, useState } from 'react'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import { array } from 'yup';
import {  useNavigate } from 'react-router-dom';
import TotalScore from '../TotalScore/TotalScore';

let questions = [
  {
    'id': 1,
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
  },
  {
    'id': 2,
    "question": "Which is the largest planet in our solar system?",
    "options": ["Earth", "Jupiter", "Mars", "Saturn"],
    "answer": "Jupiter"
  },
  {
    'id': 3,
    "question": "Which language does brrowser understand?",
    "options": ["CSS", "Javascript", "HTML", "CPP"],
    "answer": "Javascript"
  },
  {
    'id': 4,
    "question": "Which language is used for styling?",
    "options": ["CSS", "Javascript", "HTML", "CPP"],
    "answer": "CSS"
  },
  {
    'id': 5,
    "question": "Which language is used for structure?",
    "options": ["CSS", "Javascript", "HTML", "CPP"],
    "answer": "HTML"
  },
]

export default function Question() {
const navigate = useNavigate();

  const [scores, setScores] = useState(new Array(questions.length).fill(0));
  const [currentPage, setCurrentPage] = useState(0);

  function goToNextPage() {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage => currentPage + 1);
      console.log('next');
    }else{
      navigate('/totalscore',{state:{totalScore:calculatedTotalScore()}});
    }
  }

  function goToPreviousPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage => currentPage - 1);
      console.log('prev');
    }

  }

  function handleScoreUpdate(score, index) {
    setScores((prevscores) => {
      const updatedScore = [...prevscores];
      updatedScore[index] = score;
      console.log('scores...');

      return updatedScore
    });
  }

  const calculatedTotalScore = () => scores.reduce((total, score) => total + score ,0)

  console.log(calculatedTotalScore());

  // useEffect(() => {
  //   handleScoreUpdate()
  // }, []
  // )

  return (
    <>
    
      <div className=' text-white bg-[#601A40] p-2 relative container md:w-1/3 lg:w-1/4 m-auto my-16 flex  flex-col h-[550px] rounded-md'>
        {/* {question? (question.map((q)=>{
        return <QuestionCard questionInfo={q} goToNextPage goToPreviousPage id key={q.id} />
    })):(<h2>Loading ... </h2>)} */}
<div className='border-2 border-white h-full rounded-md p-2'>
        {questions ? (
          <>
          <QuestionCard questionInfo={questions[currentPage]}
            index={currentPage} key={currentPage}
             goToNextPage={goToNextPage}
            handleScoreUpdate={handleScoreUpdate}
            goToPreviousPage={goToPreviousPage}
             scores={scores} setScores={setScores}
            calculatedTotalScore={calculatedTotalScore} />

      
            </>

        ) : (<h2>Loading ... </h2>)}
  
        <p className='border-2 border-white text-white w-3/4 mx-auto px-2 py-1 rounded-md mt-4 text-center my-4'>{calculatedTotalScore()} / {questions.length}</p>
        
          <button 
           onClick={()=>navigate('/login')}
           className='text-left'><i className="fa-solid fa-arrow-left text-2xl absolute bottom-4 left-2 ml-4  mt-6 font-bold  text-white"></i></button>
         </div>

       
      </div>
     

    </>
  )
}
