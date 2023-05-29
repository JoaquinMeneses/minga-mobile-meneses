import { createReducer } from "@reduxjs/toolkit";
import actions from '../actions/comments'
import action from "../actions/mangas";
const { read_comments, is_editing_comment, edit_comment } = actions

let initialState = {
    comments: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_comments.fulfilled,
            (state, action) => {
                let newState = {

                    ...state,
                    comments: action.payload.comment.map((com) => {
                        return {
                            ...com,
                            editing: false
                        }
                    }),

                }
                console.log('Esto viene al recargar', state)
                return newState
            }
        )
        .addCase(
            is_editing_comment,
            (state, action) => {
                return {
                    ...state,
                    comments: state.comments.map((com) => {
                        if (action.payload.comment._id === com._id) {
                            return {
                                ...com,
                                editing: !com.editing
                            };
                        }
                        return com;
                    })
                };
            }
        )
        .addCase(
            edit_comment.fulfilled,
            (state, action) => {
                return {
                    ...state,
                    comments: state.comments.map((com) => {
                        let disp = {
                            ...com
                        }
                        console.log('Action',action.payload)
                        console.log('Es el com',disp._id)
                        if (action.payload._id === disp._id) {
                            console.log('Entramos aca')
                            return {
                                ...action.payload.comment,
                                editing: false
                            };
                        }
                        return com;
                    })
                };
            }
        )
)

export default reducer