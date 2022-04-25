import React, { useEffect, useState } from 'react'
import moment from 'moment';

import Modal from 'react-modal/lib/components/Modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import { uiCloseModal } from '../../actions/ui';
import { calendarAddNewEvent, calendarClearActiveEvent, calendarUpdateEvent } from '../../actions/events';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root')

const defaultStart = moment().minutes(0).seconds(0).milliseconds(0).add(1, 'hours');
const defaultEnd = defaultStart.clone().add(1, 'hours');

const initEvent = {
    title: '',
    desc: '',
    start: defaultStart.toDate(),
    end: defaultEnd.toDate(),
}

export const CalendarModal = () => {

    const dispatch = useDispatch()

    const { modalIsOpen } = useSelector(state => state.ui)
    const { activeEvent } = useSelector(state => state.calendar)

    const [startDate, setStartDate] = useState(defaultStart.toDate())
    const [endDate, setEndDate] = useState(defaultEnd.toDate())

    const [isValid, setIsValid] = useState({ valid: true, message: '' })
    const { valid, message } = isValid;

    const [formValues, setFormValues] = useState(initEvent);
    const { title, desc, start, end } = formValues;

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

    const closeModal = () => {
        dispatch(uiCloseModal())
        dispatch(calendarClearActiveEvent())
        setFormValues(initEvent)
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

            //TODO: enviar al servidor
            dispatch(calendarAddNewEvent({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    uid: '123',
                    name: 'Jorge',
                    avatar: 'https://picsum.photos/50/50'
                }
            }));
        }

        setIsValid({
            valid: true,
            message: ''
        });

        closeModal();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => { }}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <h1> { activeEvent ? 'Editar evento' : ' Nuevo evento' } </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handelStartDateChange}
                        value={startDate}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora end</label>
                    <DateTimePicker
                        onChange={handelEndDateChange}
                        value={endDate}
                        className="form-control"
                        minDate={startDate}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={"form-control" + (valid ? ' mb-2' : ' is-invalid')}
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className={valid ? '' : 'invalid-feedback'}>{message}</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Descripción del evento"
                        rows="5"
                        name="desc"
                        value={desc}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <div className='d-grid'>
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="bi bi-save2 me-1"></i>
                        <span>Guardar</span>
                    </button>
                </div>

            </form>
        </Modal>
    )
}
