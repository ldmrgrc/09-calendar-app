// import { types } from "../types/types";
import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'DTS STARTS',
        start: moment().toDate(),
        end: moment().add(3, 'hours').toDate(),
        desc: 'Unit testing with Jest and Enzyme',
        user: {
          uid: '123',
          name: 'Jorge',
          avatar: 'https://picsum.photos/50/50'
        }      
      }],
    activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.calendarFetchEvents:
            return {
                ...state,
                events: action.payload,
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
                    event.id === action.payload.id ? action.payload : event
                ),
            };
        case types.calendarDeleteEvent:
            return {
                ...state,
                events: state.events.filter((event) => event.id !== action.payload),
                activeEvent: null,
            };
        default:
            return state;
    }
};