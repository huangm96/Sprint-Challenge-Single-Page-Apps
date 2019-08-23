
import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import jssPluginPropsSort from "jss-plugin-props-sort";

const CharacterCard = props => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>{props.character.species}</Card.Meta>
      <Card.Description>{props.character.status}</Card.Description>
    </Card.Content>
    
  </Card>
);

export default CharacterCard;