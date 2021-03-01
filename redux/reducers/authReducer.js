import AsyncStorage from '@react-native-async-storage/async-storage'
const initialState = {
    loggedUser: null,
    countries:[]
}

export function authReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOG_USER':
            AsyncStorage.setItem('name', action.payload.response.name)
            AsyncStorage.setItem('token', action.payload.response.token)
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT_USER': 
            AsyncStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload.data
            } 
        default:
            return state
    }
}

