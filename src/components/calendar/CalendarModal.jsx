import React from 'react'

import Modal from 'react-modal/lib/components/Modal';
import DateTimePicker from 'react-datetime-picker';
import { useSelector } from 'react-redux';

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

export const CalendarModal = ({
    handleInputChange,
    handelStartDateChange,
    handelEndDateChange,
    handleSubmitForm,
    closeModal,
    startDate,
    endDate,
    formValues,
    isValid,
}) => {

    const { modalIsOpen } = useSelector(state => state.ui)
    const { activeEvent } = useSelector(state => state.calendar)
    const { title, desc, } = formValues;
    const { valid, message } = isValid;
    
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
            <h1> {activeEvent ? 'Editar evento' : ' Nuevo evento'} </h1>
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
