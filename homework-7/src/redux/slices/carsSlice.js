import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: []
};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarsResponse: (state, action) => {
            const cars = action.payload;
            state.cars = cars
        }
    }
});

const { reducer: carsReduser, actions: carsActions } = carsSlice;

export { carsReduser, carsActions };