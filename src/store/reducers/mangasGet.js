import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/mangasGet";
const { read_mangas, read_categories } = actions

let initialState = {
    mangas: [],
    categories: [],
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_mangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: []
                }
                if (action.payload.cates?.length > 0 && action.payload.title?.length > 0) {
                    newState.mangas = action.payload.mangas.filter(
                        manga => action.payload.cates.includes(manga.category_id) &&
                            manga.title.includes(action.payload.title)
                    )
                } else if (action.payload.cates?.length > 0) {
                    newState.mangas = action.payload.mangas.filter(
                        manga => action.payload.cates.includes(manga.category_id)
                    )
                } else if (action.payload.title?.length > 0) {
                    newState.mangas = action.payload.mangas.filter(
                        manga => manga.title.includes(action.payload.title)
                    )
                } else {
                    newState.mangas = action.payload.mangas
                }
                return newState
            }
        )
        .addCase(
            read_categories.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    categories: action.payload.categories
                }
                return newState
            }
        )
)

export default reducer

