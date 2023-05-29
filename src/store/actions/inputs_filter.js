import { createAction } from "@reduxjs/toolkit";

//la accion es un intermediario entre la vista y las operaciones de reduccion
//es la que dispara/ejecuta la modificacion/reduccion de los estados globales

const inputs_filter = createAction (
    'inputs_filter',  //nombre de la accion
    (objeto)=> {      //funcion que va a enviar datos al reducer    
                      //el objeto debe tener todas las propiedades a guardarse en la variable global
        return {
            payload: {
                title: objeto.title,
                categories: objeto.categories
            }
        }
    }
)
//la accion no tiene demaciada logica porque su unico objetivo es enviar info al reductor
//en el reduc se realiza TODA la logica necesaria para modificar/reducir los estados globales
const actions = { inputs_filter }
//construyo un objeto con la accion (mas adelante se iran agregando mas acciones)
export default actions
//exporto para poder utilizarlo en los componentes que van a despachar los datos
//y para configurar