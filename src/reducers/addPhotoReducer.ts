import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    visible: false
}

const addPhotoSlice = createSlice({
    name: "addPhoto",
    initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
            return state;
        }
    }
})

export const {setVisible} = addPhotoSlice.actions;

export default addPhotoSlice.reducer;