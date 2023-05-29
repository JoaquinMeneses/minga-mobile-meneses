import { createAction } from "@reduxjs/toolkit";

const createMangaForm = createAction('createMangaForm',(data) => {
    return {
        payload: {
            title: data.title,
            category: data.category_id,
            cover_photo: data.cover_photo,
            description: data.description
        }
    }
}
)

const action = { createMangaForm }
export default action

