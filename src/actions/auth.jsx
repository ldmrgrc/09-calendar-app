import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types";
import { calendarLogoutEvent } from "./events";


// Sign in with email and password

export const signIn = (email, password) => {
    return async (dispatch) => {

        const response = await fetchWithoutToken('auth', { email, password }, 'POST');

        if (response.ok) {

            const user = {
                uid: response.uid,
                name: response.name,
            }

            localStorage.setItem('x-token', response.token);
            localStorage.setItem('x-token-init', new Date().getTime());
            dispatch(login(user));
        } else {
            Swal.fire({
                title: 'Error',
                text: response.msg,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }
}

// Sign Up with email and password and name

export const signUp = (email, password, name, lastName) => {
    const user = {
        email,
        password,
        name: name + ' ' + lastName,
    }

    return async (dispatch) => {

        const response = await fetchWithoutToken('auth/register', user, 'POST');

        if (response.ok) {
            const user = {
                uid: response.uid,
                name: response.name,
            }

            localStorage.setItem('x-token', response.token);
            localStorage.setItem('x-token-init', new Date().getTime());
            dispatch(login(user));
        } else {
            Swal.fire({
                title: 'Error',
                text: response.errors.name.msg,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        const response = await fetchWithToken('auth/renew', null, 'GET');

        if (response.ok) {

            const user = {
                uid: response.uid,
                name: response.name,
            }

            localStorage.setItem('x-token', response.token);
            localStorage.setItem('x-token-init', new Date().getTime());

            dispatch(login(user));
        } else {
            dispatch(checked());
        }

    }
}

export const signOut = () => {

    return (dispatch) => {

        localStorage.removeItem('x-token');
        localStorage.removeItem('x-token-init');

        dispatch(calendarLogoutEvent())
        dispatch(logout());
    }

}

const logout = () => ({
    type: types.authLogout
});

const checked = () => ({
    type: types.authChecked
})

const login = (user) => ({
    type: types.authLogin,
    payload: user
})