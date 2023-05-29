import { createReducer } from "@reduxjs/toolkit";
import save_author from "../actions/save_author"

const { saveAuthorData, saveMangas } = save_author

let initialState = {
    author_photo: "",
    author_name: "",
    author_last_name: "",
    author_city: "",
    author_country: "",
    author_date: "",

    switchOn: false,
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            saveAuthorData,
            (state, action) => {
                const newState = {
                    ...state,
                    author_photo: action.payload.author_photo,
                    author_name: action.payload.author_name,
                    author_last_name: action.payload.author_last_name,
                    author_city: action.payload.author_city,
                    author_country: action.payload.author_country,
                    author_date: action.payload.author_date
                }
                return newState
            })
        .addCase(
            saveMangas,
            (state, action) => {
                const newState = {
                    ...state,
                    switchOn: action.payload.switchOn,
                }
                return newState
            })
)

export default reducer
