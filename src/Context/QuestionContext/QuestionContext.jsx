import React, { createContext } from 'react'

 export const questioncontext = createContext(null);
export default function QuestionContext() {
      const [currentPage ,setCurrentPage] = useState(1);

    function goToNextPage(index){
        setCurrentPage(index+1);
      }

      function goToPreviousPage(index){
        setCurrentPage(index-1);
      }
   
  return (
    <div>
      
    </div>
  )
}
