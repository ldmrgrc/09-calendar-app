import { types } from "../types/types"

const initialState = {
    checking: true,
    isAuthenticated: false,    
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authChecked:
            return {
                ...state,
                checking: false,
            }
        case types.authStartLogin:
            return {
                ...state,
                checking: false,
            }
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false,
                isAuthenticated: true,
            }
        case types.authRegister:
            return {
                ...state,
                ...action.payload,
                checking: false,
                isAuthenticated: true,
            }
        case types.authStartRenewToken:
            return {
                ...state,
                checking: false,
            }
        case types.authLogout:
            return {
                checking: false,
                isAuthenticated: false,
            }
        default:
            return state
    }
}