import { configureStore } from "@reduxjs/toolkit";

import mangaCards from './reducers/mangaCards'
import save_author from "../redux/reducers/save_author"
import inputs_mangaForm from './reducers/inputs_mangaForm'
import companies from './reducers/companies'
import authors from './reducers/authors'
import commentReducer from './reducers/comments'
import { reducer as mangasReducer, reducerAsync as mangaReducerAsync } from './reducers/mangas';
import { reducer as chapterReducer, reducer_get_chapters } from "./reducers/chapterData";
import mangasGet_reducer from './reducers/mangasGet'
import mangasGetMe_reducer from './reducers/mangaGet_Me'
import reactionLD from '../redux/reducers/reactionsLD'

const store = configureStore({
    reducer: {
        save_author: save_author,
        inputManga: mangasReducer,
        dataChapter: chapterReducer,
        pageMangas: mangaCards,
        manga: mangaReducerAsync,
        chapters: reducer_get_chapters,
        mangaForn: inputs_mangaForm,
        companies: companies,
        authors: authors,
        commentStore: commentReducer,
        mangasGet_reducer,
        mangasGetMe_reducer,
        reactionLD
    }
});

export default store;
