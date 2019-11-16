const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'EVENTS_FETCHED':
      console.log('reducer:', action.payload);
      return action.payload;
    case 'EVENT_CREATE_SUCCESS':
      console.log('event_create_success state', state);
      return [...state, action.payload];
    case 'EVENT_FETCHED':
      console.log('event fetched:', action.payload);
      return action.payload;
    case 'EVENT_DELETE_SUCCESS':
      const newState = state.filter(event => event.id !== action.payload);
      return newState;
    // const event = state.filter(event => event.id === action.payload.id);

    default:
      return state;
  }
};

export default reducer;
