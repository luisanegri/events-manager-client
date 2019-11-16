import React from 'react';

export default function EventDetails(props) {
  console.log('event detail page', props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
