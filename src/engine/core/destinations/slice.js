// Core
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
};

const destinations = createSlice({
    name: "destinations",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
});

export const { setItems, setLoading } = destinations.actions;
export default destinations.reducer;