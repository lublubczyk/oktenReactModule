import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";

import { rickMortyService } from '../../services';

const initialState = {
    episodes: {},
    ids: {},
    chapter: {},
    characters: [],
    errors: null,
    isLoading: null
};

const getAllEpisodes = createAsyncThunk(
    'episodeSlice/getAllEpisodes',
    async (page, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const { data } = await rickMortyService.getAllEpisodes(page);
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data);
        }
    }
);

const getAllCharacters = createAsyncThunk(
    'episodeSlice/getAllCharacters',
    async (ids, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const { data } = await rickMortyService.getAllCharacters(ids);
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data);
        }
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

    extraReducers: (builder) => {
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload;
            })

            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
            })

            .addMatcher(isFulfilled(getAllEpisodes, getAllCharacters), state => {
                state.isLoading = false;
                state.errors = null;
            })
            
            .addMatcher(isRejected(getAllEpisodes, getAllCharacters), (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            
            .addMatcher(isPending(getAllEpisodes, getAllCharacters), state => {
                state.isLoading = true;
            })
    }
});

const { reducer: episodesReduser, actions } = episodeSlice;

const episodesActions = {
    ...actions,
    getAllEpisodes,
    getAllCharacters
};

export { episodesReduser, episodesActions };
