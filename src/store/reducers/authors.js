import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/authors";

const { get_authors, update_authors } = actions

let initialState = {
    active: [],
    inactive: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_authors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    active: action.payload.authors.active,
                    inactive: action.payload.authors.inactive
                }
                return newState
            }
        )
        .addCase(
            update_authors.fulfilled,
            (state, action) => {
                /* console.log(state.active) */
                if (action.payload.active) {
                    let newState = {
                        ...state,
                        inactive: state.inactive?.filter(each => each._id !== action.payload.author._id),
                        active: [...state.active, action.payload.author]
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        active: state.active?.filter(each => each._id !== action.payload.author._id),
                        inactive: [...state.inactive, action.payload.author]
                    }
                    return newState
                }
            }
        )
)

export default reducer
