import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: {}
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCar: (state, action) => {
            const car = action.payload;
            state.car = car
        }
    }
});

const { reducer: carReduser, actions: carActions } = carSlice;

export { carReduser, carActions };