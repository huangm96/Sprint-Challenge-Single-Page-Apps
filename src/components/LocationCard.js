
 //name, type, dimension, residents;
import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const Locationcard = styled.div`
  margin: 20px;
`;

const LocationCard = props => (
  <Locationcard>
    <Card className="locationCard">
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>{props.location.type}</Card.Meta>
        <Card.Description>{props.location.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>Residents: {props.location.residents.length}</Card.Content>
    </Card>
  </Locationcard>
);

export default LocationCard;