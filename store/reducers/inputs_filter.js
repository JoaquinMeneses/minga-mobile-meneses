import { createReducer } from "@reduxjs/toolkit";
//importo las acciones 
import inputs_actions from '../actions/inputs_filter'
//desestructuro las acciones que necesito configurar
const { inputs_filter } = inputs_actions
//defino estado inicial
let initial_state = {
    title: '',
    categories: [],
}

const reducer = createReducer(
    initial_state,              //estado inicial
    (builder) => builder        //funcion constructora de casos
        .addCase(               //cada caso implica un cambio de estado
            inputs_filter,      //nombre de la informacion que tiene
            (state, action) => {//funcion del estado y la accion y es la encargada       
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    categories: action.payload.categories,
                    page: action.payload.page,
                    category_id: action.payload.category_id
                }
                return new_state
            }
        )
)

export default reducer