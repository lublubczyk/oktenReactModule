import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { rickMortyService } from '../../services';

const initialState = {
    episodes: {},
    ids: {},
    chapter: {},
    characters: []
}

const getAllEpisodes = createAsyncThunk(
    'episodeSlice/getAllEpisodes',
    async (page) => {
        const { data } = await rickMortyService.getAllEpisodes(page);
        return data
    }
);

const getAllCharacters = createAsyncThunk(
    'episodeSlice/getAllCharacters',
    async (ids) => {
        const { data } = await rickMortyService.getAllCharacters(ids);
        return data
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setIds: (state, action) => {
            state.ids = action.payload
        },
        setChapter: (state, action) => {
            state.chapter = action.payload
        }
       
    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload;
            });
        builder
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.characters = action.payload
            });
    }
    
       
});

const { reducer: episodesReduser, actions } = episodeSlice;

const episodesActions = {
    ...actions,
    getAllEpisodes,
    getAllCharacters
};

export { episodesReduser, episodesActions };
