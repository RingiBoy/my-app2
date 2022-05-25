import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import carService from "../../services/car.service";


const initialState ={
    cars:[]
};


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ()=>{
        const {data} = await carService.getAll();
        return data
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getAll.pending]:(state, action)=>{
            console.log('pending');
        },
        [getAll.fulfilled]:(state, action)=>{
            console.log('done');
            console.log(action.payload);
        },
        [getAll.rejected]:(state, action)=>{
            console.log('error');
        },

    }

});


const {reducer:carReducer, actions} = carSlice;
const carActions = {
    getAll
}

export {
    carReducer,
    carActions

}