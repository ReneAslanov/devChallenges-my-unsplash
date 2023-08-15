export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface PostPhoto {
    uuid: UUID,
    label: string,
    url: string
}

export interface Photos {
    id: number,
    uuid: UUID,
    label: string,
    url: string
}