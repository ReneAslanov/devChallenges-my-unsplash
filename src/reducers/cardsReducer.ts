import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCard, CardState } from "../types/cardTypes";
import { UUID } from "../types/cardTypes";

const initialState: CardState = {
    cards: [
        {
            uuid: crypto.randomUUID(),
            label: "pretty women in water",
            url: "https://images.unsplash.com/photo-1691142750541-2ec61bb9d23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        },

        {
            uuid: crypto.randomUUID(),
            label: "pretty women in water",
            url: "https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },

        {
            uuid: crypto.randomUUID(),
            label: "pretty women in water",
            url: "https://images.unsplash.com/flagged/photo-1570700005880-4ecdb8595d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },

        {
            uuid: crypto.randomUUID(),
            label: "pretty women in water",
            url: "https://images.unsplash.com/photo-1522991260885-a32a5bc6da38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },

        {
            uuid: crypto.randomUUID(),
            label: "pretty women in water pretty women in water",
            url: "https://images.unsplash.com/photo-1526784507872-e8ffc369bb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },

        {
            uuid: crypto.randomUUID(),
            label: "and another one",
            url: "https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
    ],

    activeCard: null,
    fadeOut: null
}

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<AddCard>) => {
            state.cards = [...state.cards, action.payload];
            return state;
        },

        removeCard: (state, action: PayloadAction<UUID>) => {
            state.cards = state.cards.filter(card => card.uuid !== action.payload);
            return state;
        },

        setCards: (state, action: PayloadAction<Array<AddCard>>) => {
            state.cards = action.payload;
        },

        setActiveCard: (state, action: PayloadAction<UUID | null>) => {
            state.activeCard = action.payload;
            return state;
        },

        setActiveCardFadeOut: (state, action: PayloadAction<UUID | null>) => {
            state.fadeOut = action.payload;
            return state;
        }
    }
})

export const {addCard, removeCard, setCards, setActiveCard, setActiveCardFadeOut} = cardsSlice.actions;

export default cardsSlice.reducer;