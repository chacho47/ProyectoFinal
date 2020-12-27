import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const MostrarTurno = ({turnos}) => {
    return (
        <ListGroup>
            <div className='list-group'>
                
             {turnos.map(turno => (
            
            <a key={turno._id} className='p-5 list-group-item list-group-item-action flex-column align-items-start'>
                 <h4>{turno.nombrePaciente}</h4>
                 <h4>{turno.especialidad}</h4>
                 <h4>{turno.nombreMedico}</h4>
                 <h4>{turno.fecha}</h4>
                 <h4>{turno.hora}</h4>
                 <h4>{turno.consulta}</h4>
             </a>
             
             ))}
         </div>
        </ListGroup>

    );
};

export default MostrarTurno;