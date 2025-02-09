import { createContext, useState } from "react";
import React from "react";
export const LevelContext = createContext(null);
export function LevelProvider({ children }) {
    const [level, setLevel] = useState();
    
    return (
        <LevelContext.Provider value={{ level, setLevel }}>
        {children}
        </LevelContext.Provider>
    );
}