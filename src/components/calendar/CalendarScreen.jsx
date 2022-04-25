import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { NavBar } from '../ui/NavBar'
import { messages } from '../../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { calendarClearActiveEvent, calendarSetActiveEvent } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'


moment.locale('es')

const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

  const dispatch = useDispatch()
  //TDDO: leer eventos desde el state de redux
  const { events, activeEvent } = useSelector(state => state.calendar)
  const [calendarView, setCalendarView] = useState(localStorage.getItem('calendar-view') || 'month')

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  }

  const onSelectEvent = (e) => {
    dispatch(calendarSetActiveEvent(e))
  }

  const onViewChange = (e) => {
    setCalendarView(e)
    localStorage.setItem('calendar-view', e)
  }

  const onSelectSlot = ({ action, start, end }) => {
    dispatch(calendarClearActiveEvent())
    // if (action === 'click') {
    //   dispatch(calendarSetActiveEvent({
    //     id: new Date().getTime(),
    //     title: '',
    //     desc: '',
    //     start: start,
    //     end: end
    //   }))
    //   dispatch(uiOpenModal())
    // }
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#6A1B9A',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
    }
    return {
      style: style
    }
  }


  return (
    <div className='calendar-screen'>
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        defaultView={calendarView}
        components={{
          event: CalendarEvent
        }}
      />

      <AddNewFab />

      {
        activeEvent && <DeleteEventFab />
      }

      <CalendarModal />
    </div>
  )
}
