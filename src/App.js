import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/Home" render={props => <WelcomePage {...props} />} />
      <Route exact path="/CharacterList" render={props => <CharacterList {...props} />} />
      <Route exact path="/LocationsList" render={props => <LocationsList {...props} />} />
       <Route exact path="/EpisodeList" render={props => <EpisodeList {...props} />} />
    </main>
  );
}
