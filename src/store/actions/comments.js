import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";
import { comment } from "postcss";

let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }

const read_comments = createAsyncThunk('readComments', async () => {
    try {
        let res = await axios(apiUrl + 'api/comments/read-Comments')
        return {
            comment: res.data.response
        }
    } catch (error) {
        return {
            comment: []
        }
    }
})

const is_editing_comment = createAction('is_editing_comment',
    (comment) => {
        return {
            payload: {
                comment
            }
        }
    }
)

const edit_comment = createAsyncThunk('edit_comment', async (payload) => {
    try {
        let data = {
            comment: payload.newComment
        }
        console.log('Esto es lo que llega en data ',payload.comment)
        console.log(headers)
        await axios.put(apiUrl+`api/comments/${payload.comment._id}`,data,headers)
        return {...payload.comment,comment: payload.newComment} 
    } catch (error) {
        return payload.comment
    }
} 
)

const actions = { read_comments, is_editing_comment, edit_comment }
export default actions