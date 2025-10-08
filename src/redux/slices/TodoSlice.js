import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false ,
    todos : null ,
    error : null
}

const todoSlice = createSlice({
    name : 'todos',
    initialState ,
    reducers : {
    pending : (state) => {
        state.loading = true
    }  ,
    success : (state,action)=>{
        console.log(action.payload)
        state.loading = false 
        state.todos = action.payload
    }  
    }
})
export default todoSlice.reducer ;
export const {pending , success} = todoSlice.actions