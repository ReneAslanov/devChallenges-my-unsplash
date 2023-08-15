import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UUID } from "../types/cardTypes";
import { DeletePhotoProps } from "../types/deletePhotoTypes";

const initialState: DeletePhotoProps = {
    id: crypto.randomUUID(),
    isVisible: false
}

const addPhotoSlice = createSlice({
    name: "deletePhoto",
    initialState,
    reducers: {
        deletePhoto: (state, action: PayloadAction<UUID>) => {
            state.id = action.payload;
            return state;
        },

        setVisibleDelete: (state, action: PayloadAction<boolean>) => {
            state.isVisible = action.payload
        }
    }
})

export const {deletePhoto, setVisibleDelete} = addPhotoSlice.actions;

export default addPhotoSlice.reducer;