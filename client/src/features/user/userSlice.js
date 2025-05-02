// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentUserAPI, updateCurrentUserAPI, updatePasswordAPI } from './userAPI';

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async (_, thunkAPI) => {
        try {
            return await fetchCurrentUserAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const updateCurrentUser = createAsyncThunk(
    'user/updateCurrentUser',
    async (userData, thunkAPI) => {
        try {
            return await updateCurrentUserAPI(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const updatePassword = createAsyncThunk(
    'user/updatePassword',
    async (passwordData, thunkAPI) => {
        try {
            return await updatePasswordAPI(passwordData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(updateCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updatePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
