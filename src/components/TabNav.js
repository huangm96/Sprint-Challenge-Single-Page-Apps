import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

const TabNav = () => {
  return (
    <div>
      <div className="ui attached tabular menu">
        <NavLink className="navButton item" to="/Home">
          <i aria-hidden="true" className="home icon" />
          Home Page
        </NavLink>
        <NavLink className="navButton item" to="/CharacterList">
          <i aria-hidden="true" className="user icon" />
          Characters
        </NavLink>
        <NavLink className="navButton item" to="/LocationsList">
          <i aria-hidden="true" className="map icon" />
          Locations
        </NavLink>
        <NavLink className="navButton item" to="/EpisodeList">
          <i aria-hidden="true" className="film icon" />
          Episodes
        </NavLink>
      </div>
    </div>
  );
};

export default TabNav;
