import React from 'react'

export const NavBar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand mx-3'>
                <i className='bi bi-apple'></i>
            </span>

            <button className="btn btn-outline-danger me-3">
                <i className='bi bi-box-arrow-right'></i>
                <span className='ms-1'>Salir</span>
            </button>
        </div>
    )
}
