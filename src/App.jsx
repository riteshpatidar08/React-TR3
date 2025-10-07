import React from 'react';
import { useReducer } from 'react';
function App() {
  //first step create a initialState object
  const initialState = {
    count: 0,
  };
  //define a reducer function ,
  //Reducer function takes  the state and action based on the action it updates the state variable
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'increment') {
      return { count: state.count + 1 };
    } else {
      return state;
    }
  };
  //step 3 pass both reducer and initial state as an argument in the usereducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
