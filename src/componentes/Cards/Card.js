import React from 'react';
import {Button, Card as BSCard} from 'react-bootstrap'

const Card = ({img,texto, id}) => {
  return (
    <div key={id} className="col-lg-4 col-md-6 text-center py-2">
      <BSCard className="shadow" style={{ width: "18rem" }}>
        <BSCard.Img variant="top" src={img} />
        <BSCard.Body>
          <BSCard.Text>
          {texto}
          </BSCard.Text>
          <Button variant="warning">Go somewhere</Button>
        </BSCard.Body>
      </BSCard>
    </div>
    );
  };
  
  export default Card;