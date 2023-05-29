import { createReducer } from "@reduxjs/toolkit";
import mangaCards from '../actions/mangasCards'


const { pageMangasCards } = mangaCards

let initialState = {
//    id: '',
//    category_id: '',
    title: '',
    page: '',
}

const reducer = createReducer( 
    initialState, (builder) => builder
        .addCase(
            pageMangasCards,
            (state, action) => {
                const new_state = {
                    ...state,
                    //id: action.payload.id,
                    //category_id: action.payload.category_id,
                    title: action.payload.title,
                    page: action.payload.page,
                } 
                return new_state
            }
        )
    )

export default reducer