import { types } from "../types/types";

// {
//     id: new Date().getTime(),
//     title: 'DTS STARTS',
//     start: moment().toDate(),
//     end: moment().add(3, 'hours').toDate(),
//     desc: 'Unit testing with Jest and Enzyme',
//     user: {
//         _id: '123',
//         name: 'Jorge',
//     }
// }

const initialState = {
    events: [],
    activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.calendarFetchEvents:
            return {
                ...state,
                events: [...action.payload],
            };
        case types.calendarAddNewEvent:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case types.calendarClearActiveEvent:
            return {
                ...state,
                activeEvent: null,
            };
        case types.calendarSetActiveEvent:
            return {
                ...state,
                activeEvent: action.payload,
            };
        case types.calendarUpdateEvent:
            return {
                ...state,
                events: state.events.map((event) =>
                    event._id === action.payload._id ? action.payload : event
                ),
            };
        case types.calendarDeleteEvent:
            return {
                ...state,
                events: state.events.filter((event) => event._id !== action.payload),
                activeEvent: null,
            };
        case types.calendarLogoutEvent:
            return {
                ...initialState
            };
        default:
            return state;
    }
};