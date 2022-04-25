import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarDeleteEvent } from '../../actions/events'

export const DeleteEventFab = () => {

    const dispatch = useDispatch()

    const { activeEvent } = useSelector(state => state.calendar)

    const handleDelete = () => {
        dispatch(calendarDeleteEvent(activeEvent.id))
    }

    return (
        <button
            className="btn btn-danger shadow-lg fab-danger"
            onClick={handleDelete}>
            <i className='bi bi-trash' />
        </button>
    )
}
