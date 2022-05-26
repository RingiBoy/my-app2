import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import carService from "../../services/car.service";


const initialState ={
    cars:[],
    status:null,
    dataError: {}
};


const getAll = createAsyncThunk(
    'carSlice/getAllCars',
    async ()=>{
        const {data} = await carService.getAll();
        return data   //попадает в пейлоал
    }
)

const create = createAsyncThunk(
    'create',
    async ({car},{rejectWithValue})=>{
        try {
            const {data}= await carService.create(car)
            return data
        }catch (e){
           return  rejectWithValue({messageError:e.message, dataError:e.response.data})
        }

    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getAll.pending]:(state, action)=>{

            state.status='loading....';
        },
        [getAll.fulfilled]:(state, action)=>{

            state.status='w done';
            state.cars=action.payload  // date
        },
        [getAll.rejected]:(state, action)=>{

            state.status='error load cars';
        },
        [create.fulfilled]:(state, action)=>{
            state.cars.push(action.payload)
            console.log('car create');
        },
        [create.rejected]:(state, action)=>{
            const {messageError, dataError}=action.payload;
            state.status = messageError
            state.dataError=dataError
        },


    }

});


const {reducer:carReducer, actions} = carSlice;

const carActions = {
    getAll,
    create
}

export {
    carReducer,
    carActions

}