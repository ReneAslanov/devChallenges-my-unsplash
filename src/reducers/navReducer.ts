import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    query: ""
}

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.query = action.payload;
            return state;
        }
    }
})

export const {setSearchQuery} = navSlice.actions;

export default navSlice.reducer;