import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LocationsList = props => {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log(response);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getLocations();
  }, []);

  return (
    <LocationList>
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </LocationList>
  );
};
export default LocationsList;
