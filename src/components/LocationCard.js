
 //name, type, dimension, residents;
import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";



const LocationCard = props => (
  
    <Card className="locationCard">
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>{props.location.type}</Card.Meta>
        <Card.Description>{props.location.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>Residents: {props.location.residents.length}</Card.Content>
    </Card>
  
);

export default LocationCard;