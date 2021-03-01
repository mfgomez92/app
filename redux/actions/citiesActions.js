import axios from 'axios'

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const respuesta  = await fetch('https://mytinerarygomez.herokuapp.com/cities')
            const data = await respuesta.json()
            //catchear el error
            dispatch({type: 'LOAD_CITIES', payload: data.response})
        }
    },

    getItineraries:(id)=>{
        return async (dispatch, getState) => {
            const respuesta  = await fetch('https://mytinerarygomez.herokuapp.com/itineraries/'+id)
            const data = await respuesta.json()
            //catchear el error
            dispatch({type: 'LOAD_ITINERARIES', payload: data})
        }
    },
    filtrarCities: (valorAFiltrar) => {
        return async (dispatch, getState) => {
            dispatch({type: 'FILTRAR_CITIES', payload: valorAFiltrar})
        }
    }
}

export default citiesActions