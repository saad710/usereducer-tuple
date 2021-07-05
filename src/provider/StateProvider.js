import React, { createContext } from 'react';
import { useEffect, useReducer } from 'react';


const initialState = {
    
    tableField : [] ,
    tableData : [],
}

const reducer = (state,action) => {
    switch(action.type){
        case 'GetData':
            return {
                ...state,
                tableData: action.result ,
               
               
            }
            case 'PutData':
                return {
                   ...state,
                    tableField: action.field,
                }
                
            default: 
            return state;
    }
}

export const ReducerContext = createContext()

const StateProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState)
 
    const { children } = props;

    return (
        <ReducerContext.Provider value={{state,dispatch}}>
            {children}
        </ReducerContext.Provider>
    );
};

export default StateProvider;