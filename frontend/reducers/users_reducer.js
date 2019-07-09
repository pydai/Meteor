import {RECEIVE_USER, RECEIVE_CURRENT_USER} from '../actions/session_actions';
// import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return merge({}, oldState, {[action.user.id]: action.user});
      return Object.assign({}, {[action.user.id]: action.user })
    // case RECEIVE_USER:
    //   return Object.assign({}, {[action.user.id]: action.user})
    default:
      return oldState;
  }
};

export default usersReducer;