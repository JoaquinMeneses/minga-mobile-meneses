import { createReducer } from "@reduxjs/toolkit";
//Se importan las acciones
import chapterDataAction from "../actions/chapterData"
//Desestructuro las acciones que necesito configurar 
const { chapterData, get_chapters, delete_chapter, update_chapter } = chapterDataAction
//Defino estado inicial 
let initial_state = {
    title: "",
    pageRef: 0,
    _id: "",
    manga_id: ""
}

let initial_state_chapters = {
    chapters: []
}

export const reducer = createReducer(
    initial_state,
    (builder) => builder            //funcion constructora de casos
        .addCase(                   //cada caso implica un cambio de estado para una accion
            chapterData, 
            (state, action) => {    //Funcion que depende del estado y de la accion y es la encargada de manejar la logica de reduccion/modificacion 
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    pageRef: action.payload.pageRef,
                    _id: action.payload._id,
                    manga_id: action.payload.manga_id 
                }
                return new_state
            }
        )
)

export const reducer_get_chapters = createReducer(
    initial_state_chapters,
    (builder) => builder
        .addCase(
            get_chapters.fulfilled,
            (state, action) => {
                let new_state ={
                    ...state,
                    chapters: action.payload.chapters
                }
                return new_state
            }
        )
        .addCase(delete_chapter.fulfilled, (state, action) => {
            let newState = {
                ...state,
                chapters: state.chapters.filter(
                    (chapter) => chapter._id !== action.payload.id_to_remove
                ),
            };
            return newState;
        })
        .addCase(update_chapter.fulfilled, (state, action) => {
            const updatedChapter = action.payload.data; // Capta el capítulo actualizado desde el payload
        
            const updatedChapters = state.chapters.map((chapter) => {
                if (chapter._id === updatedChapter._id) {
                    return updatedChapter; // Reemplaza el capítulo existente con el capítulo actualizado
                } else {
                    return chapter; // Mantiene los demás capítulos sin cambios
                }
            });
        
            return {
                ...state,
                chapters: updatedChapters,
            };
        })
)
