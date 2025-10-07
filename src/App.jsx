import React from 'react'
import { useReducer } from 'react'
function App() {
  //first step create a initialState object
  const initialState = {
    count  : 0 ,
  }
  //define a reducer function , 
  //Reducer function takes  the state and action based on the action it updates the state variable
  const reducer = (state, action) => {
    console.log(state,action)
  }

  return (
    <div>
    <button>Increment</button>
    </div>
  )
}

export default App
