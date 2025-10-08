import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { increment } from './redux/slices/CounterSlice'
function App() {
const {count} = useSelector((state)=>state.count)
const dispatch = useDispatch()

const handleIncrement = () => {
  dispatch(increment())
}
  return (
    <div className='font-bold text-3xl flex h-screen items-center justify-center flex-col'>
      <h1>{count}</h1>
       {/* //replace this with count state variable */}
       <button  onClick={handleIncrement} className='px-10 py-4 bg-blue-300 text-white font-bold'>Increment</button>
    </div>
  )
}

export default App
