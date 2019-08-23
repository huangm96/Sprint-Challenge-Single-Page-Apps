import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const TabNav = () => {
  return (
    <div>
      <div className="TabNav">
        <NavLink className="navButton Home" to="/">
          Home Page
        </NavLink>
        <NavLink k className="navButton CharacterList" to="/CharacterList">
          Characters
        </NavLink>
        <NavLink className="navButton LocationList" to="/LocationsList">
          Locations
        </NavLink>
        <NavLink className="navButton EpisodeList" to="/EpisodeList">
          Episodes
        </NavLink>
      </div>
    </div>
  );
};


 




export default TabNav;

