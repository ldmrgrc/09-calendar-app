import React from 'react'

export const CalendarEvent = ({event}) => {
  return (
    <div>
        <strong className='me-2'>{event.title}:</strong>
        <span>{event.user.name}</span>
    </div>
  )
}
