import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(signOut())
    }


    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand mx-3'>
                <i className='bi bi-apple'> { name }</i>
            </span>

            <button 
                className="btn btn-outline-danger me-3"
                onClick={ handleLogout}
                >
                <i className='bi bi-box-arrow-right'></i>
                <span className='ms-1'>Salir</span>
            </button>
        </div>
    )
}
