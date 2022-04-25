import { types } from "../types/types";

export const calendarAddNewEvent = (event) => {
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
    return {
        type: types.calendarUpdateEvent,
        payload: event,
    };
}

export const calendarDeleteEvent = (eventId) => {
    return {
        type: types.calendarDeleteEvent,
        payload: eventId,
    };
}