import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "../Car/Car";
import {carActions} from "../../redux/slices/car.slice";

const Cars = () => {

  const {cars} =  useSelector(store =>store.cars)
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(carActions.getAll())
  },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;