import React from 'react';
import PropTypes from 'prop-types';

const PetDate = ({date, removeDate}) => (  
    
        <div className="cita">
            <p>Mascota: <span>{date.pet}</span></p>
            <p>Propietario: <span>{date.owner}</span></p>
            <p>Fecha: <span>{date.date}</span></p>
            <p>Hora: <span>{date.hour}</span></p>
            <p>Síntomas: <span>{date.symptoms}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => removeDate(date.id)}
            >Eliminar &times;</button>
        </div>

    );

PetDate.propTypes = {
    date: PropTypes.object.isRequired,
    removeDate: PropTypes.func.isRequired
}

export default PetDate;