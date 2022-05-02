import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { NavBar } from '../ui/NavBar'
import { messages } from '../../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseModal, uiOpenModal } from '../../actions/ui'
import {
    calendarAddNewEvent,
    calendarClearActiveEvent,
    calendarFetchEvents,
    calendarSetActiveEvent,
    calendarUpdateEvent
} from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
import Swal from 'sweetalert2'


moment.locale('es')
const localizer = momentLocalizer(moment)

const defaultStart = moment().minutes(0).seconds(0).milliseconds(0).add(1, 'hours');
const defaultEnd = defaultStart.clone().add(1, 'hours');

const initEvent = {
    title: '',
    desc: '',
    start: defaultStart.toDate(),
    end: defaultEnd.toDate(),
}


export const CalendarScreen = () => {

    const dispatch = useDispatch()

    const [calendarView, setCalendarView] = useState(localStorage.getItem('calendar-view') || 'month')
    const [startDate, setStartDate] = useState(defaultStart.toDate())
    const [endDate, setEndDate] = useState(defaultEnd.toDate())
    const [formValues, setFormValues] = useState(initEvent);
    const [isValid, setIsValid] = useState({ valid: true, message: '' })

    //TDDO: leer eventos desde el state de redux
    const { events, activeEvent } = useSelector(state => state.calendar)
    const { modalIsOpen } = useSelector(state => state.ui)
    const { uid } = useSelector(state => state.auth)

    const { title, start, end } = formValues;

    useEffect(() => {
        dispatch(calendarFetchEvents())
    }, [dispatch])

    useEffect(() => {
        if (!modalIsOpen) {
            setEndDate(defaultEnd.toDate())
            setStartDate(defaultStart.toDate())
        }
    }, [modalIsOpen])


    useEffect(() => {

        if (activeEvent) {
            setFormValues(activeEvent);
        } else {
            setFormValues(initEvent);
        }

    }, [activeEvent, setFormValues])

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handelStartDateChange = (e) => {
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    const handelEndDateChange = (e) => {
        setEndDate(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La fecha y hora de inicio debe ser menor a la fecha y hora fin',
                confirmButtonText: 'Ok'
            });
            return;
        }

        if (title.trim() === '') {
            setIsValid({
                valid: false,
                message: 'El titulo es requerido'
            });
            return;
        }

        if (activeEvent) {
            dispatch(calendarUpdateEvent(formValues));
        } else {
            dispatch(calendarAddNewEvent(formValues));
        }

        setIsValid({
            valid: true,
            message: ''
        });

        closeModal();
    }

    const closeModal = () => {
        dispatch(uiCloseModal())
        dispatch(calendarClearActiveEvent())
        setFormValues(initEvent)
    }

    const onDoubleClick = (e) => {
        // console.log(e)
        setStartDate(e.start);
        setEndDate(e.end);
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

        if (action === 'click') {

            setStartDate(start)
            setEndDate(end)

            setFormValues({
                ...formValues,
                start: start,
                end: end
            });

            dispatch(uiOpenModal())
        }

    }

    const eventStyleGetter = (event, start, end, isSelected ) => {

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#6A1B9A' : '#66635B',
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

            <CalendarModal
                handleInputChange={handleInputChange}
                handelStartDateChange={handelStartDateChange}
                handelEndDateChange={handelEndDateChange}
                handleSubmitForm={handleSubmitForm}
                closeModal={closeModal}
                startDate={startDate}
                endDate={endDate}
                formValues={formValues}
                isValid={isValid}
            />
        </div>
    )
}
