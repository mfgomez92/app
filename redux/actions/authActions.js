import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const authActions = {
    newUser: (newUser) => {
        return async (dispatch, getState) => {
           try{const respuesta = await axios.post('https://mytinerarygomez.herokuapp.com/user/signup', newUser)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type: 'LOG_USER', payload: respuesta.data})}
            catch(error){
                console.log(error)
            }
        }
    },
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://mytinerarygomez.herokuapp.com/user/signin', user)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    },
    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },
    //logueo desde Async
    logFromLS: (token) => {
        return async (dispatch, getState) => {
            console.log(token)
            try {
                const respuesta = await axios.post('https://mytinerarygomez.herokuapp.com/user/ls', token, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(respuesta)
                dispatch({type: 'LOG_USER', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
                if (err.response.status === 401) {
                    AsyncStorage.clear()
                    return false
                }
            }
        }
    },
    getCountries:() => {
        return async (dispatch, getState) => {
            const respuesta = await axios.get('https://restcountries.eu/rest/v2/all')
            dispatch({type:'GET_COUNTRIES', payload: respuesta})
        }
    },

}

export default authActions