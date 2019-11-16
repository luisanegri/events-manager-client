import React from 'react';

export default function EventForm(props) {
  console.log('props form', props);
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Name:</label>
        <input
          defaultValue={props.values.name}
          onChange={props.onChange}
          name="name"
        />
        <label>Date:</label>
        <input
          defaultValue={props.values.date}
          onChange={props.onChange}
          name="date"
        />
        <label>Description:</label>
        <input
          defaultValue={props.values.description}
          onChange={props.onChange}
          name="description"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
