import { createContext, useState } from "react";
import React from "react";
export const ScoreContext = createContext(null);
export function ScoreProvider({ children }) {
    const [questions, setQuestions] = useState([]);
    
    return (
        <ScoreContext.Provider value={{ questions, setQuestions }}>
        {children}
        </ScoreContext.Provider>
    );
}