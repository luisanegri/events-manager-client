import React from 'react';
import { loadEvents, deleteEvent } from '../actions/events';
import { connect } from 'react-redux';
import EventsList from './EventsList';

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <EventsList
        events={this.props.events}
        deleteEvent={this.props.deleteEvent}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('state map', state);
  return { events: state.events };
};

export default connect(mapStateToProps, { loadEvents, deleteEvent })(
  EventsListContainer
);
