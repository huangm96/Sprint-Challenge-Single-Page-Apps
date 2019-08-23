import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import jssPluginPropsSort from "jss-plugin-props-sort";

const EpisodeCard = props => (
  <Card className="episodeCard">
    <Card.Content>
      <Card.Header>{props.episode.name}</Card.Header>
      <Card.Meta>{props.episode.air_date}</Card.Meta>
      <Card.Description>{props.episode.episode}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      Characters: {props.episode.characters.length}
    </Card.Content>
  </Card>
);

export default EpisodeCard;
