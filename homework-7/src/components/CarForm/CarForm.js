import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { carActions, toDoActions } from '../../redux';

const CarForm = () => {
    const navigate = useNavigate();
    const { car } = useSelector(state => state.car);
    const { toDo } = useSelector(state => state.toDo);
   
    const dispatch = useDispatch();
    
    const { handleSubmit, register, reset } = useForm({
        defaultValues: toDo === 'create' ? false : car
    });
    
    const run = (e) => {
        if (toDo === 'create') dispatch(carActions.setCar(e));
        if (toDo === 'change') dispatch(carActions.setCar({ id: car.id, ...e }));
        dispatch(toDoActions.setToConfirm());
        navigate('/cars');
        reset();
    }

    return (
        <div>
            {toDo.toUpperCase()} Car {car.id && `Id ${car.id}`}
            <form onSubmit={handleSubmit(run)}>
                <input type='text' placeholder='brand' {...register('brand')} />
                <input type='number' placeholder='price' {...register('price')} />
                <input type='number' placeholder='year' {...register('year')} />
                <button>Run</button>
            </form>
        </div>
    )
};

export { CarForm };