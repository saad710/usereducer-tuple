import React from 'react';
import { useEffect, useReducer } from 'react';

const tableInfo = [
   { id:'first' , label: 'first'},
   { id:'second' , label: 'second'},
   { id:'third' , label: 'third'},
   { id:'fourth' , label: 'fourth'},
]
const tableFieldInfo = [
    {name:'Account'},
    {name:'Balance'},
    {name:'value'},
]
const initialState = {
    
    tableField : [],
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


const TestReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state.tableField)

    useEffect (()  => {
        dispatch({type:'GetData', result: tableInfo})
        dispatch({type:'PutData', field: tableFieldInfo})
        
       
    },[])


    return (
        <div>
           <div>
           {
                state.tableData?.map(data =>  (
                    <table border='1'>
                       <tr >
                           <td>
                               {data.label}
                           </td>
                       </tr>
                    </table>
                ))
            }
           </div>

            {
                state.tableField?.map(row => (
                    <h1>{row.name}</h1>
                ))
            }
        </div>
    );
};

export default TestReducer;