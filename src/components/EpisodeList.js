import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard'

const EpisodeList = props => {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisode] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisode = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          console.log(response.data.results);
          setEpisode(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getEpisode();
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </section>
  );
};
export default EpisodeList;
