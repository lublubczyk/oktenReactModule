
import { configureStore } from '@reduxjs/toolkit';
import { episodesReduser } from './slices';

const store = configureStore({
    reducer: {
        episodes: episodesReduser
    }
});

export { store };