import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/reactionsLD_action";

const { read_reactions, upd_reactions, delete_reactions } = actions;

const initialState = {
    reaction: []
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(read_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: action.payload.reaction
        }))
        .addCase(delete_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: state.reaction.filter(each => each._id !== action.payload.reactionId)
        }))
        .addCase(upd_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: state.reaction.map(each => (each._id === action.payload.reaction?._id ? action.payload.reaction : each))
        }));
});

export default reducer;
