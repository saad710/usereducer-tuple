import React, { useContext,useEffect } from 'react';
import { ReducerContext } from './provider/StateProvider';

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

const Test = () => {
    const {state,dispatch} = useContext(ReducerContext)
  
    useEffect (()  => {
        dispatch({type:'GetData', result: tableInfo})
        dispatch({type:'PutData', field: tableFieldInfo})
        
       
    },[dispatch])
    // dispatch({type:'GetData', result: tableInfo})
    // dispatch({type:'PutData', field: tableFieldInfo})
    console.log(state)
    return (
        <div>
            <h1>hello</h1>
            <div>
            {
                state.tableData?.map((data,index)=> (
                    <h2 key={index}>{data.label}</h2>
                ))
            }
            </div>
           <div>
           {
                state.tableField?.map((info,index) => (
                    <p key={index}>{info.name}</p>
                ))
            }
           </div>
        </div>
    );
};

export default Test;