import { RECEIVE_ALL_RESPONSES, RECEIVE_RESPONSE, DESTROY_RESPONSE }
 from '../actions/response_actions';
import merge from 'lodash/merge';

const ResponsesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_RESPONSES:
      return action.responses;
    case RECEIVE_RESPONSE:
      newState = merge({}, oldState, {[action.response.id]: action.response})
      return newState;
    case DESTROY_RESPONSE:
      newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default ResponsesReducer;