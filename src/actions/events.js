import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';
export const EVENT_FETCHED = 'EVENT_FETCHED';
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS';

const baseUrl = 'http://localhost:5000';

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});

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

export const loadEvent = (id, data) => (dispatch, _getState) => {
  console.log('loadEvent id and data', id, data);
  // getting id but no data
  request
    .get(`${baseUrl}/event/${id}`)
    .send(data)
    .then(response => {
      // getting 200 status code but body is null
      console.log('loadEvent response', response);
      dispatch(loadEventSuccess(response.body));
    })
    .catch(console.error);
};

export const deleteEventSuccess = id => {
  return {
    type: 'EVENT_DELETE_SUCCESS',
    payload: id
  };
};

export const deleteEvent = id => (dispatch, getState) => {
  console.log('delete', id);
  request
    .delete(`${baseUrl}/event/${id}`)
    .then(response => {
      console.log('deleteEvent response', response);
      dispatch(deleteEventSuccess(response.body));
    })
    .catch(console.error);
};
