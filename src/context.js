import React from 'react'
import App from './App';
import {createContext} from "react"


export const MyContext = createContext();

function context() {
    return (
            <MyContext.Provider value= {"testtoooooooooooooo"} >
            <App />
            </MyContext.Provider>
    )
}

export default context
