import { useState } from 'react';

import { CreateCar } from "./CreateCar/CreateCar";
import { ShowCars } from "./ShowCars/ShowCars";

const Task2 = () => {
    
    const [triger, setTriger] = useState(false);

    return (
        <div>
            <h1>Task2</h1>
            <CreateCar setTriger={setTriger} />
            <ShowCars  triger={triger} setTriger={setTriger} />
        </div>
    )
};

export { Task2 };