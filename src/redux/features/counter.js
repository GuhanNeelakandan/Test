import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    value:0 //1,2,3,4,5,6
}

const counterSlice = createSlice({
    initialState,
    name:'counter',
    reducers:{
        increment :(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer