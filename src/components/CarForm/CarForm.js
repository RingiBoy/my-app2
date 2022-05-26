import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/car.slice";

const CarForm = () => {
    const {reset,register,handleSubmit}=useForm();
    const dispatch = useDispatch()
    const {dataError}= useSelector(state => state.cars)
    const submit=async (newCar)=>{
        await dispatch(carActions.create({car:newCar}))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model:<input type=" text" {...register('model')}/> </label> </div>
            {dataError.model&&<span>{dataError.model[0]}</span>}
            <div><label>price:<input type=" text" {...register('price')}/> </label> </div>
            {dataError.price&&<span>{dataError.price[0]}</span>}
            <div><label>year:<input type=" text" {...register('year')}/> </label> </div>
            {dataError.year&&<span>{dataError.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export default CarForm;