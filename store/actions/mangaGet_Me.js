import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const read_mangas_me = createAsyncThunk('read_mangas_me', async ({ title, cates }) => {
    try {
        let token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.get(apiUrl + 'mangas/me', headers)
        return {
            mangas_me: res.data.response,
            title,
            cates
        }
    } catch (error) {
        return {
            mangas_me: []
        }
    }
})

const delete_mangas_me = createAsyncThunk('delete_mangas_me', async ({ id }) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.id;
        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.delete(apiUrl + 'mangas/' + id, headers, userId)
        return {
            mangas_me: id
        }
    } catch (error) {
        console.log(error)
        return {
            mangas_me: []
        }
    }
})

const upd_mangas_me = createAsyncThunk('upd_mangas_me', async ({ id, ...data }) => {
    try {
        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let response = await axios.put(apiUrl + `mangas/${id}`, data, headers)
        console.log(response.data.message)
        return {
            mangas_me: response.data.response,
        }
    } catch (error) {
        console.log(error.response.data.message)
        return {
            mangas_me: [],
            error: error.response.data.message
        }
    }
})

const actions = { read_mangas_me, delete_mangas_me, upd_mangas_me }
export default actions