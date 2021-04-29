import React, {createContext, useReducer} from 'react';
import AppReducer from './appReducer';
//initial
const initialState = {
    transactions:[
    {id:1, text: 'flower', amount: 400},
    {id:2, text: 'choco', amount: -600},
    {id:3, text: 'icecream', amount: 900},
]
}

//create GlobalContext
export const GlobalContext= createContext(initialState);

//provider
export const GlobalProvider= ( {children} ) => {
    const [state, dispatch]= useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value= {{transactions: state.transactions}}>
        { children }
        </GlobalContext.Provider>
    );
}
