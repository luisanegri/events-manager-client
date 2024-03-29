import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent, updateEvent } from '../actions/events';

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  render() {
    return <EventDetails event={this.props.event} />;
  }
}

const mapStateToProps = state => {
  // returning empty array of eventS
  console.log('map event detail?');
  return { event: state.event };
};

export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
