import { useState } from 'react';

import { carsAxiosService } from '../../services/carsAxiosServise';
import style from './Car.module.css'
import { UpdateForm } from '../UpdateForm/UpdateForm';

const Car = ({ car,setTriger }) => {
    
    const [isUpdate, setUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const { id, brand, price, year } = car;
    
    const update = () => {
        setDataUpdate(car);
        setUpdate(prev => !prev);
    };
    
    const deleteCar = async () => {
        await carsAxiosService.deleteById(id);
        setTriger((prev) => !prev)
    };

    return (
        <div className={style.Car}>
            {isUpdate ? (<UpdateForm dataUpdate={dataUpdate} setTriger={setTriger } setUpdate={setUpdate} />) : (
                <div>
                    <h4>Id: {id}</h4>
                    <h4>Brand: {brand}</h4>
                    <h4>Price: {price}</h4>
                    <h4>Year: {year}</h4>
                    <button onClick={update}>Update</button>
                    <button onClick={deleteCar}>Delete</button>
                </div>
            )}
        </div>
    )
};

export { Car };