import React from 'react'
import { useReducer } from 'react' ;

function App() {

const initialState = {
  data : null ,
  loading : false ,
  error : null
}

const reducer = (state,action) => {

}

const [state, dispatch] = useReducer(reducer,initialState)
console.log(state)
//NOTE Handling api calls,using useReducer hook

  return (
    <div>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>{state.error}</div>}
      {state.data && !state.loading && <div>{JSON.stringify(state.data)}</div>}
    </div>
  )
}

export default App
