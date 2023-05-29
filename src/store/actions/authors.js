import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const get_authors = createAsyncThunk('get_authors', async () => {
    let token = localStorage.getItem("token")
    let headers = { headers: { "Authorization": `Bearer ${token}` } }

    try {
        let res = await axios(apiUrl + 'api/authors/admin', headers)
        return {
            authors: res.data.authors
        }
    } catch (error) {
        return {
            authors: []
        }
    }
})

const update_authors = createAsyncThunk('update_authors', async ({ id, data }) => {
    let token = localStorage.getItem("token")
    let headers = { headers: { "Authorization": `Bearer ${token}` } }

    try {
        let res = await axios.put(apiUrl + 'auth/role/author/' + id, data, headers)
        console.log(res.data.message)
        return {
            author: res.data.update,
            active: res.data.update.active
        }
    } catch (error) {
        return {
            authors: []
        }
    }
})

const actions = { get_authors, update_authors }

export default actions
