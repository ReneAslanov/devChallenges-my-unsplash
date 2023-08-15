import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
    screenSize: window.innerWidth
}

const fetchToggleSlice = createSlice({
    name: "fetchToggle",
    initialState,
    reducers: {
        setToggle: (state) => {
            state.toggle = !state.toggle;
            return state;
        },

        setScreenSize: (state) => {
            state.screenSize = window.innerWidth;
            console.log(state.screenSize)
            return state;
        }
    }
})

export const {setToggle, setScreenSize} = fetchToggleSlice.actions;

export default fetchToggleSlice.reducer;