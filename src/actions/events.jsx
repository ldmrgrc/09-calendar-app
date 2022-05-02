import Swal from "sweetalert2";
import { convertDateEvents } from "../helpers/convertDateEvents";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const calendarAddNewEvent = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const response = await fetchWithToken('events', event, 'POST');

            if (response.ok) {
                // console.log('evento creado', response);
                event.id = response.event._id;
                event.user = {
                    _id: uid,
                    name,
                }
                // console.log(event);
                dispatch(calendarAddNewEventSuccess(event));
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
           console.log(error);
        }

    }
};

const calendarAddNewEventSuccess = (event) => {
    return {
        type: types.calendarAddNewEvent,
        payload: event,
    };
}

export const calendarClearActiveEvent = () => {
    return {
        type: types.calendarClearActiveEvent,
    };
}

export const calendarSetActiveEvent = (event) => {
    return {
        type: types.calendarSetActiveEvent,
        payload: event,
    };
}

export const calendarUpdateEvent = (event) => {
    return async (dispatch) => {

        // console.log(event);
        const { _id } = event;
        
        try {

            const response = await fetchWithToken(`events/${_id}`, event, 'PUT');

            if (response.ok) {            
                dispatch(calendarUpdateEventSuccess(event));
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
           console.log(error);
        }
    }
}

const calendarUpdateEventSuccess = (event) => {
    return {
        type: types.calendarUpdateEvent,
        payload: event,
    };
}

export const calendarDeleteEvent = () => {
    return async (dispatch, getState ) => {

        const { _id } = getState().calendar.activeEvent;

        try {

            const response = await fetchWithToken(`events/${_id}`, {}, 'DELETE');

            if (response.ok) {
                dispatch(calendarDeleteEventSuccess(_id));
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const calendarDeleteEventSuccess = (eventId) => {
    return {
        type: types.calendarDeleteEvent,
        payload: eventId,
    };
}

export const calendarFetchEvents = () => {
    return async (dispatch) => {
        try {
            const response = await fetchWithToken(`events`);
            const events = convertDateEvents(response.events);

            if (response.ok) {
                // console.log(response.events);
                dispatch(calendarFetchEventsSuccess(events));
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }
}

const calendarFetchEventsSuccess = (events) => {
    return {
        type: types.calendarFetchEvents,
        payload: events,
    };
}

export const calendarLogoutEvent = () => {
    return {
        type: types.calendarLogoutEvent,
    };
}