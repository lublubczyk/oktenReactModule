import { useEffect, useState } from "react";

import style from "./ShowCars.module.css"
import { Car } from "../Car/Car";
import { carsAxiosService } from "../../services/carsAxiosServise";

const ShowCars = ({ triger, setTriger }) => {
    
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsAxiosService.getAll().then(({ data }) => setCars(data));

    }, [triger]);

    return (
        <div className={style.ShowCars}>
            {cars.map((car) => <Car key={car.id} car={car} setTriger={setTriger} />)}
        </div>
    )
};

export { ShowCars };