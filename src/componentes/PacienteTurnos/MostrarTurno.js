import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const MostrarTurno = (props) => {
    return (
        <ListGroup>
            <div className='list-group'>
                
             {props.turno.map(turnos => (
            
            <a key={turnos._id} className='p-5 list-group-item list-group-item-action flex-column align-items-start'>
                 <h4>{turnos.nombrePaciente}</h4>
                 <h4>{turnos.especialidad}</h4>
                 <h4>{turnos.nombreMedico}</h4>
                 <h4>{turnos.fecha}</h4>
                 <h4>{turnos.hora}</h4>
                 <h4>{turnos.consulta}</h4>
             </a>
             
             ))}
         </div>
        </ListGroup>

    );
};

export default MostrarTurno;