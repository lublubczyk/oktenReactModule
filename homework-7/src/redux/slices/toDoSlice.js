import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDo: '',
    toConfirm: false
}

const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        setToDo: (state, action) => {
            const data = action.payload;
            state.toDo = data;
        },
        setToConfirm: (state) => {
            state.toConfirm = !state.toConfirm
        }
    }
});

const { reducer: toDoReduser, actions: toDoActions } = toDoSlice;

export { toDoReduser, toDoActions };