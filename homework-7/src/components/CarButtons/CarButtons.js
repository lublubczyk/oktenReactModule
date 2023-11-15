import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { carActions, toDoActions } from '../../redux';

const CarButtons = ({ car }) => {
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const changeCar = () => {
        dispatch(carActions.setCar(car));
        dispatch(toDoActions.setToDo('change'));
        navigate('/form');
    };

    const deleteCar = () => {
        dispatch(carActions.setCar(car));
        dispatch(toDoActions.setToDo('delete'));
        navigate('/form')
    };

    return (
        <div>
            <button onClick={changeCar}>Change</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    )
};

export { CarButtons };