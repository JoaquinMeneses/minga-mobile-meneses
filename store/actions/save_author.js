import { createAction } from "@reduxjs/toolkit";

const saveAuthorData = createAction(
    "saveAuthorData",
    (objeto) => {
        return {
            payload: {
                author_photo: objeto.author_photo,
                author_name: objeto.author_name,
                author_last_name: objeto.author_last_name,
                author_city: objeto.author_city,
                author_country: objeto.author_country,
                author_date: objeto.author_date
            }
        }
    }
);

const saveMangas = createAction(
    "saveMangas",
    (objeto) => {
        return {
            payload: {
                switchOn: objeto.switchOn,
            }
        }
    }
);

const actions = { saveAuthorData, saveMangas };

export default actions;
