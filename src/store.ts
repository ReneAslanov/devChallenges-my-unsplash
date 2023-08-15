import { configureStore } from "@reduxjs/toolkit";
import addPhotoReducer from "./reducers/addPhotoReducer";
import cardsReducer from "./reducers/cardsReducer";
import deletePhotoReducer from "./reducers/deletePhotoReducer";
import navReducer from "./reducers/navReducer";
import fetchToggleReducer from "./reducers/fetchToggleReducer";

const store = configureStore({
    reducer: {
        addPhoto: addPhotoReducer,
        cards: cardsReducer,
        deletePhoto: deletePhotoReducer,
        nav: navReducer,
        toggle: fetchToggleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;