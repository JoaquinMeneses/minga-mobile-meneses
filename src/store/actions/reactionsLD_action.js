import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user.id;
const token = localStorage.getItem("token");
const headers = { headers: { "Authorization": `Bearer ${token}` } }

const post_reactions = createAsyncThunk('post_reactions', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${apiUrl}reactions`, data, headers);
        return response.data.reaction;
    } catch (error) {
        return rejectWithValue({ error: "Error al crear la reacción" });
    }
});

const upd_reactions = createAsyncThunk('upd_reactions', async (data) => {
    try {
        const response = await axios.post(`${apiUrl}reactions`, data, headers);
        return {
            reaction: response.data.reaction
        };
    } catch (error) {
        return { error: "Error al actualizar la reacción" };
    }
});

const delete_reactions = createAsyncThunk('delete_reactions', async (data) => {
    try {
        await axios.post(`${apiUrl}reactions`, data, headers);
        return {
            reactionId: data
        };
    } catch (error) {
        return { error: "Error al eliminar la reacción" };
    }
});

const read_reactions = createAsyncThunk('read_reactions', async () => {
    try {
        let res = await axios.get(apiUrl + `reactions/re`, headers, userId);
        return {
            reaction: res.data.reaction,
        };
    } catch (error) {
        return { error: "Error al obtener las reacciones" };
    }
});

const actions = { post_reactions, read_reactions, upd_reactions, delete_reactions };

export default actions;
