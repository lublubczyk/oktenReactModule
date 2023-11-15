import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { carAxiosService } from '../services';
import { CarList } from '../components';
import { carsActions, toDoActions } from '../redux/slices';

const CarsPage = () => {
    
    const dispatch = useDispatch();
    const { car } = useSelector(state => state.car);
    const { toDo, toConfirm } = useSelector(state => state.toDo);
    
    useEffect(() => {
        carAxiosService.getAll().then(({ data }) => dispatch(carsActions.setCarsResponse(data)))
    }, [dispatch, toConfirm]);

    useEffect(() => {
        if (toConfirm && toDo === 'delete') {
            carAxiosService.deleteCarById(car.id);
            dispatch(toDoActions.setToConfirm())
        };

        if (toDo === 'create' && toConfirm) {
            carAxiosService.createCar(car);
            dispatch(toDoActions.setToConfirm());
        };

        if (toDo === 'change' && toConfirm) {
            const { id, brand, price, year } = car;
            carAxiosService.updateById(id, { brand, price, year });
            dispatch(toDoActions.setToConfirm());
        };

    }, [toConfirm, toDo, car, dispatch]);


    return (
        <div>
            <CarList />
        </div>
    )
};

export { CarsPage };