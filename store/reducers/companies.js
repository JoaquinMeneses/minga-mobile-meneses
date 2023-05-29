import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/companies";

const { get_companies, update_companies } = actions

let initialState = {
    active: [],
    inactive: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_companies.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    active: action.payload.companies.active,
                    inactive: action.payload.companies.inactive
                }
                return newState
            }
        )
        .addCase(
            update_companies.fulfilled,
            (state, action) => {
                console.log(state.active)
                if (action.payload.active) {
                    let newState = {
                        ...state,
                        inactive: state.inactive?.filter(each => each._id !== action.payload.company._id),
                        active: [...state.active, action.payload.company]
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        active: state.active?.filter(each => each._id !== action.payload.company._id),
                        inactive: [...state.inactive, action.payload.company]
                    }
                    return newState
                }
            }
        )
)

export default reducer
