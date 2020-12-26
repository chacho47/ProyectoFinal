import React from "react";
import MostrarTurno from "../PacienteTurnos/MostrarTurno";

const MedicoTurnos = (props) => {
  return (
    <>
    <div>
      <h1>Desde MedicoTurnos</h1>
    </div>
    <MostrarTurno turno={props.turno}/>
    </>
  );
};

export default MedicoTurnos;
