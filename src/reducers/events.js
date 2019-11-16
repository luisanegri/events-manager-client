const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'EVENTS_FETCHED':
      console.log('reducer:', action.payload);
      return action.payload;
    case 'EVENT_CREATE_SUCCESS':
      return [...state, action.payload];
    case 'EVENT_FETCHED':
      console.log('event fetched:', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
