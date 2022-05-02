import React from 'react'
import { useDispatch } from 'react-redux'
import { calendarDeleteEvent } from '../../actions/events'

export const DeleteEventFab = () => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(calendarDeleteEvent())
    }

    return (
        <button
            className="btn btn-danger shadow-lg fab-danger"
            onClick={handleDelete}>
            <i className='bi bi-trash' />
        </button>
    )
}
