import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import style from './UpdateForm.module.css'
import { carsAxiosService } from '../../services/carsAxiosServise';
import { carValidator } from '../../validators/carValidator';

const UpdateForm = ({ dataUpdate, setTriger, setUpdate }) => {
    const { id, brand, price, year } = dataUpdate;
    
    const { reset, handleSubmit, register, formState: { isValid, errors } } = useForm({
        defaultValues: { brand, price: +price, year: +year },
        mode: 'all',
        resolver: joiResolver(carValidator),
        
    });

    const update = async (car) => {
        await carsAxiosService.updateById(id, car);
        setUpdate(prev => !prev);
        setTriger(prev => !prev);
        reset();
    };

    return (
        <div>
            <h4>Id:{id}</h4>
            <form className={style.UpdateForm} onSubmit={handleSubmit(update)}>
                <input type="text" {...register('brand')} />
                <input type="text" {...register('price', { valueAsNumber: true })} />
                <input type="text" {...register('year', { valueAsNumber: true })} />
                <button disabled={!isValid}>Save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </div>
    )
};

export { UpdateForm };