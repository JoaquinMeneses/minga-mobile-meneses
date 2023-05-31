import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from "../../../api";
import axios from "axios";

const readOneManga = createAction(
    'readOneManga',
    (objet) => {
        return {
            payload: {
                cover_photo: objet.cover_photo,
                title: objet.title,
                manga_id: objet.manga_id
            }
        }
    }
)

const getMangaDataAsync = createAsyncThunk("getMangaDataAsync", async(manga_id)=>{
    try {
        let res = await axios(apiUrl+"mangas/"+manga_id)
       
        return {
            manga: res.data.response
        }
    } catch (error) {
        return {
            manga: []
        }
    }
})
const actions = {readOneManga, getMangaDataAsync}

export default actions
