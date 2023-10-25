import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carsAxiosService } from "../../services/carsAxiosServise";
import { carValidator } from "../../validators/carValidator";

const CreateCar = ({setTriger}) => {
    
    const { reset, handleSubmit, register, formState: { isValid, errors } } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    
    const save = async (car) => {
        await carsAxiosService.create(car);
        setTriger((prev) => !prev);
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="number" placeholder={'price'} {...register('price',{valueAsNumber:true})} />
            <input type="number" placeholder={'year'} {...register('year',{valueAsNumber:true})} />
            <button disabled={!isValid}>Create Car</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message }</div>}
        </>   
    )
};

export { CreateCar };