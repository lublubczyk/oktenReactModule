import { configureStore } from '@reduxjs/toolkit';

import { carReduser, carsReduser, toDoReduser } from './slices';

const store = configureStore({
    reducer: {
        cars: carsReduser,
        car: carReduser,
        toDo: toDoReduser
     }
});

export { store };