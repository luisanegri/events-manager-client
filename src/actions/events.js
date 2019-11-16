import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';
export const EVENT_FETCHED = 'EVENT_FETCHED';

const baseUrl = 'http://localhost:5000';

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});

// THUNK!!!!!!!!!!!!!
export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  // if (getState().events) return;

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      console.log('response', response);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const loadEventSuccess = event => ({
  type: EVENT_FETCHED,
  payload: event
});

export const loadEvent = data => dispatch => {
  console.log('loadEvent', data);
  request
    .get(`/event/{id}`)
    .send(data)
    .then(response => {
      // not getting anything in response
      console.log('loadEvent response', response);
      dispatch(loadEventSuccess(response.body));
    })
    .catch(console.error);
};
