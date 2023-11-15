import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toDoActions } from "../../redux";
import { Car } from "../Car";
import style from './CarList.module.css';

const CarList = () => {

    const { cars } = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createCar = () => {
        dispatch(toDoActions.setToDo('create'));
        navigate('/form');
    };
    return (
        <>
            <button onClick={createCar}>Crete New Car </button>
            <div className={style.CarList}>
                {cars.map(car => <Car key={car.id} car={car} />)}
            </div>
        </>
    )
};

export { CarList };