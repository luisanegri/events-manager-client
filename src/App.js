import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer';
import CreateEventFormContainer from './components/CreateEventFormContainer';
import EventDetailsContainer from './components/EventDetailsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={EventsListContainer} />
        <Route path="/event" exact component={CreateEventFormContainer} />
        <Route path="/event/:id" component={EventDetailsContainer} />
      </div>
    );
  }
}
