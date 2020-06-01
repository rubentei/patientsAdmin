import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Form = ({createDate}) => {

    // Create dates state
    const [petDate, updateDate] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    // Create 
    const [error, updateError] = useState(false);

    // Function activated each time user type something
    const handleChange = e => {
        updateDate({
            ...petDate,
            [e.target.name] : e.target.value
        })
    }

    // Extract values
    const { pet, owner, date, hour, symptoms } = petDate;

    // User submits form
    const submitDate = e => {
        e.preventDefault();

        // Validate
        if(pet.trim() === '' || owner.trim() === '' ||
          date.trim() === '' || hour.trim() === '' ||
          symptoms.trim() === '') {
            updateError(true);
            return;
        }

        // Remove alert message
        updateError(false);

        // Assign ID
        petDate.id = uuid();

        // Create date
        createDate(petDate);

        // Clean form
        updateDate({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitDate}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Nombre Propietario</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre Propietario de la Mascota"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />

                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"                
                >Agregar Cita</button>

            </form>
        </Fragment>
      );
}

Form.propTypes = {
    createDate: PropTypes.func.isRequired
}

export default Form;