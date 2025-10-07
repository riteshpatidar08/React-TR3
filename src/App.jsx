import React, { useEffect } from 'react';
import { useReducer } from 'react';

function App() {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const reducer = (state, action) => {
    if (action.type === 'FETCH_PENDING') {
      return { ...state, loading: true };
    } else if (action.type === 'FETCH_SUCCESS') {
      console.log(action.payload);
      return { ...state, loading: false, data: action.payload };
    } else if (action.type === 'FETCH_FAILED') {
      return { ...state, error: action.payload, loading: false };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  //NOTE Handling api calls,using useReducer hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_PENDING' });
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>{state.error}</div>}
      {state.data && !state.loading && <div>{JSON.stringify(state.data)}</div>}
    </div>
  );
}

export default App;
