import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const read_mangas = createAsyncThunk('read_mangas', async ({ cates, title, currentPage }) => {
    try {
        let token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.get(apiUrl + `mangas?page=${currentPage}`, headers)
        return {
            mangas: res.data.response,
            title,
            currentPage,
            cates
        }
    } catch (error) {
        return {
            mangas: []
        }
    }
})

const read_categories = createAsyncThunk('read_categories', async () => {
    try {
        let res = await axios.get(apiUrl + 'categories')
        return {
            categories: res.data.categories
        }
    } catch (error) {
        return {
            categories: []
        }
    }
})

const actions = { read_mangas, read_categories }
export default actions 