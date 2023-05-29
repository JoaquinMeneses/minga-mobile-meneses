import { createReducer } from "@reduxjs/toolkit";
import mangasAction from '../actions/mangas'

const { readOneManga, getMangaDataAsync } = mangasAction

let initialState = {
    cover_photo: ''
}

let initialStateAsync = {
    manga: []
}

export const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            readOneManga,
            (state,action) => {
                const new_state = {
                    ...state,
                    cover_photo: action.payload.cover_photo,
                    title: action.payload.title,
                    manga_id: action.payload.manga_id
                }
                return new_state
            }
        )
)

export const reducerAsync = createReducer(
    initialStateAsync,
    (builder) => builder
        .addCase(
            getMangaDataAsync.fulfilled,
            (state,action)=>{
                const new_state = {
                    ...state,
                    manga: action.payload.manga 
                }
                return new_state
            }
        )
)

