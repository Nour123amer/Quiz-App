import React, { useEffect, useState } from 'react'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';

    let questions =[
        {
          'id':1,  
          "question": "What is the capital of France?",
          "options": ["Berlin", "Madrid", "Paris", "Rome"],
          "answer": "Paris"
        },
        {
            'id':2,  
          "question": "Which is the largest planet in our solar system?",
          "options": ["Earth", "Jupiter", "Mars", "Saturn"],
          "answer": "Jupiter"
        },
        {
            'id':3,  
            "question": "Which language does brrowser understand?",
            "options": ["CSS", "Javascript", "HTML", "CPP"],
            "answer": "Javascript"
          },
           {
            'id':4,  
            "question": "Which language is used for styling?",
         "options": ["CSS", "Javascript", "HTML", "CPP"],
            "answer": "CSS"
          }, 
          {
            'id':5,  
            "question": "Which language is used for structure?",
            "options": ["CSS", "Javascript", "HTML", "CPP"],
               "answer": "HTML"
          },
      ]

export default function Question() {
    
    //   const [question ,setQuestion] = useState(null);
   
   const [currentPage ,setCurrentPage] = useState(0);
      function goToNextPage(currentPage){
        setCurrentPage(currentPage+1);
        console.log('next');
        
      }

      function goToPreviousPage(currentPage){
        setCurrentPage(currentPage-1);
        console.log('prev');
        
      }

    //   useEffect(()=>{
    //     setQuestion(questions);
    //   },[])
      
      
      return (
    <>
    <div className='border text-white bg-[#601A40] border-gray-500 container w-1/3 mx-auto flex px-4 flex-col h-[550px]  py-8 rounded-md'>
    {/* {question? (question.map((q)=>{
        return <QuestionCard questionInfo={q} goToNextPage goToPreviousPage id key={q.id} />
    })):(<h2>Loading ... </h2>)} */}
    
    {questions? (
    <QuestionCard questionInfo={questions[currentPage ]}  index={currentPage} key={currentPage} nextFn={goToNextPage} prevFn={goToPreviousPage} />

):(<h2>Loading ... </h2>)}
    </div>

    </>
  )
}