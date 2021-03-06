import { RECEIVE_ALL_STORIES, RECEIVE_STORY, DESTROY_STORY } 
  from '../actions/story_actions';
import merge from 'lodash/merge';

const StoriesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories;
    case RECEIVE_STORY:
      newState = merge({}, oldState, {[action.story.id]: action.story});
      return newState;
    case DESTROY_STORY:
      newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default StoriesReducer;