import React, { useContext, useEffect, useState } from 'react'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import { array } from 'yup';
import {  useNavigate } from 'react-router-dom';
import TotalScore from '../TotalScore/TotalScore';
import { LevelContext } from '../../Context/LevelContext/LevelContext';
import { ScoreContext } from '../../Context/ScoreContext/ScoreContext';


// let questions =
// [
//   {
//     'id': 1,
//     "question": "What is the capital of France?",
//     "options": ["Berlin", "Madrid", "Paris", "Rome"],
//     "answer": "Paris"
//   },
//   {
//     'id': 2,
//     "question": "Which is the largest planet in our solar system?",
//     "options": ["Earth", "Jupiter", "Mars", "Saturn"],
//     "answer": "Jupiter"
//   },
//   {
//     'id': 3,
//     "question": "Which language does brrowser understand?",
//     "options": ["CSS", "Javascript", "HTML", "CPP"],
//     "answer": "Javascript"
//   },
//   {
//     'id': 4,
//     "question": "Which language is used for styling?",
//     "options": ["CSS", "Javascript", "HTML", "CPP"],
//     "answer": "CSS"
//   },
//   {
//     'id': 5,
//     "question": "Which language is used for structure?",
//     "options": ["CSS", "Javascript", "HTML", "CPP"],
//     "answer": "HTML"
//   },
// ]

let questions1 =[{
  "question": "A flashing red traffic light signifies that a driver should do what?",
  "id": 1,
  'options':["stop","speed up","proceed with caution","honk the horn"],
  "answer": "stop"
}, {
  "question": "A knish is traditionally stuffed with what filling?",
  "id": 2 ,
  'options':["cheese","ham","potato","creamed corn"],
  "answer": "cheese"
},
{
  "question": "A pita is a type of what?",
  "id": 3,
  'options':[ "fresh fruit",
  "flat bread",
  "French tart",
"friend bean dip"],

  "answer": "flat bread"
},
 {
  "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
  "id": 4,
  'options':[ "landscape",
   "caricature",
   "still life",
 "Impressionism"],
  "answer": "caricature"
}]
let question2 =
[{
  "question": "A second-year college student is usually called a what?",
  "id": 5,
  'options':[ "sophomore",
   "senior",
  "freshman ",
  "junior "],
  "answer": "sophomore"
}, {
  "question": "A student who earns a J.D. can begin his or her career as a what?",
  'id': 6,
  'options':[ "lawyer",
   "bricklayer",
  "doctor",
  "accountant"],
  "answer": "lawyer"
}, {
  "question": "A triptych is a work of art that is painted on how many panels?",
  'id':7,
  'options':[ "two",
   "three",
  "five",
  "eight"]
,    "answer": "three"
}, {
  "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
  'id':8,
  'options':[ "oneself",
    "other people",
    "little made large",
    "hued in green and blue"],
    "answer": "other people"
  }]
  
  let question3= [{
    "question": "According to a popular slogan, what state should people not 'mess with'?",
    'id':9,
    'options':[ "New York",
      "Texas",
      "Montana",
      "Rhode Island"],
      "answer": "Texas"
    }, {
      "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
      'id':10,
  'options':[ "oneself",
   "other people",
  "little made large",
  "hued in green and blue"],
  "answer": "other people"
}, {
  "question": "According to a popular slogan, what state should people not 'mess with'?",
  'id':11,
  'options':[ "New York",
   "Texas",
  "Montana",
  "Rhode Island"]
,    "answer": "Texas"
}, {
  "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
  'id':12,
  'options':[ "tuna",
    "laundry",
    "popcorn",
    "coffee"],
    "answer": "tuna"
  }, {
    "question": "According to folklore, the 'jackalope' is an antlered version ",
    'id':13,
    'options':[ "chicken",
      "rabbit",
      "moose",
      "snake"],
      "answer": "rabbit"
    }, {
      "question": "According to Greek mythology, who was Apollo's twin sister?",
      'id':14,
  'options':[ "tuna",
   "laundry",
  "popcorn",
  "coffee"],
  "answer": "coffee"
}, {
  "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
  'id':15,
  'options':[ "chicken",
    "rabbit",
    "moose",
    "snake"],
    "answer": "rabbit"
  }, {
    "question": "According to Greek mythology, who was Apollo's twin sister?",
    'id':16,
  'options':[ "chicken",
   "rabbit",
  "moose",
  "snake"],
  "answer": "rabbit"
}, {
  "question": "According to Greek mythology, who was Apollo's twin sister?",
  'id': 17,
  'options':[ "Aphrodite",
   "Artemis",
  "Venus",
  "Athena"],
  "answer": "Artemis"
}, {
  "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
  'id': 18,
  'options':[ "cursing them",
   "blessing a child",
  "counting money",
  "passing time"],
  "answer": "cursing them"
}, {
  "question": "According to legend, in what country are you most likely to meet a leprechaun?",
  'options':[ "Ireland",
   "Poland",
  "Greenland",
  "Scotland"],
  "answer": "Ireland"
}, {
  "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
  'id':20,
  'options':[ "chicken",
    "rabbit",
    "moose",
    "snake"],
    "answer": "rabbit"
  }
]
export default function Question() {
const navigate = useNavigate();
const {level} = useContext(LevelContext);
const {questions,setQuestions} = useContext(ScoreContext);
 console.log(level);
 
  

  const getQuestions =() =>{
    if(level === 'beginner'){
      return questions1
    }else if(level === 'intermediate'){
      return question2
    }else if(level === 'advanced'){
      return question3
    }

    return [];
  }

  // const questions = getQuestions();
  // const [questions ,setQuestions] = useState([]);
  const [scores, setScores] = useState();

 
 
useEffect(()=>{
  const selectedQuestions = getQuestions();
  console.log(new Array(selectedQuestions.length).fill(0));
  setQuestions(selectedQuestions);
  setScores(new Array(selectedQuestions.length).fill(0))
  
},[level])

  console.log(scores);
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

  function handleScoreUpdate(scores, index) {
    setScores((prevscores) => {
      const updatedScore = [...prevscores];
      updatedScore[index] = scores;
      console.log('scores...');

      return updatedScore
    });
  }

  console.log(scores);

    const calculatedTotalScore = () => { 
      if(!scores || scores.length === 0 ) return 0;
      return scores.reduce((total, score) => total + score ,0)


    }


  return (
    <>
    
      <div className=' text-white bg-[#0492C2] p-2 relative container md:w-1/3 lg:w-1/4 m-auto my-16 flex  flex-col h-[550px] rounded-md'>
        {/* {question? (question.map((q)=>{
        return <QuestionCard questionInfo={q} goToNextPage goToPreviousPage id key={q.id} />
    })):(<h2>Loading ... </h2>)} */}
<div className='border-2 border-white h-full rounded-md p-2'>


 
        {questions.length > 0 && questions[currentPage] ? (
          <>
          <QuestionCard questionInfo={questions[currentPage]}
            index={currentPage} key={currentPage}
             goToNextPage={goToNextPage}
            handleScoreUpdate={handleScoreUpdate}
            goToPreviousPage={goToPreviousPage}
             scores={scores} setScores={setScores}
            calculatedTotalScore={calculatedTotalScore}
             />

      
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
