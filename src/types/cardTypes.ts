export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface CardState {
    cards: Array<AddCard>,
    activeCard: null | UUID,
    fadeOut: null | UUID
}

export interface AddCard {
    uuid: UUID,
    label: string,
    url: string
}