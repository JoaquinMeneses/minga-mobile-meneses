import { createReducer } from "@reduxjs/toolkit";
import action from "../actions/inputs_mangaForm";

const { createMangaForm } = action

const initialState = {
    title: "",
    category: "",
    cover_photo: "", 
    description: ""
}

const reducer = createReducer(
    initialState, (builder) => builder
        .addCase(
            createMangaForm,
            (state, action) => {
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    category: action.payload.category,
                    cover_photo: action.payload.cover_photo,
                    description: action.payload.description
                }
                return new_state
            }
        )
    )

export default reducer