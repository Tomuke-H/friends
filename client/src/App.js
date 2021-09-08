import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './Home';
import Friends from './Friends';
import FriendNewForm from './FriendNewForm';
import Movies from './Movies';
import FriendEditForm from './FriendEditForm';
import MovieNewForm from './MovieNewForm';
import MovieEditForm from './MovieEditForm';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/friends" component={Friends}/>
          <Route exact path="/friends/new" component={FriendNewForm}/>
          <Route exact path="/friends/:id/edit" component={FriendEditForm}/>
          <Route exact path="/friends/:id/movies" component={Movies}/>
          <Route exact path="/friends/:id/movies/new" component={MovieNewForm}/>
          <Route exact path="/movies/:id/edit" component={MovieEditForm}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
