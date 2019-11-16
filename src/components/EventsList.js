import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function EventsList(props) {
  console.log('props', props);

  //   if (!props.events) {
  //     return false;
  //   }

  return (
    <div>
      <ul>
        {props.events.map(event => (
          <li>
            <Link to={`/event/${event.id}`}>{event.name}</Link>
            <button onClick={() => props.deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
