import React, { Fragment, useState } from 'react';

const Form = () => {

    // Create date state
    const [petDate, updateDate] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    // Function activated each time user type something
    const handleChange = e => {
        updateDate({
            ...petDate,
            [e.target.name] : e.target.value
        })
    }

    // Extract values
    const { pet, owner, date, hour, symptoms } = petDate;

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
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
 
export default Form;