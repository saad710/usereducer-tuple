import React from 'react';
import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
    lastData: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: '',
                lastData:'hello'
            };
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There was a problem fetching!',
            };
        default:
            return state;
    }
};


const GetPost = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading....' : state.post.title}
            {state.error || null}
         
          <h1>{state.lastData}</h1>
            
        </div>
    );
};

export default GetPost;