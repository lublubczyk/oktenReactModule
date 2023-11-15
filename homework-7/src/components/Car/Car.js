import { CarButtons } from "../CarButtons";
import style from './Car.module.css';

const Car = ({ car }) => {
    
    const { id, brand, price, year } = car;

    return (
        <div className={style.Car}>
            Car
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <CarButtons car={car} />
        </div>
    )
};

export { Car };