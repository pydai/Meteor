import * as APIFollowUtil from '../util/follow_util';
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const DESTROY_FOLLOW = 'DESTROY_FOLLOW';

export const receiveAllFollows = (follows) => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows: follows
});

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

export const removeFollow = (id) => ({
  type: DESTROY_FOLLOW,
  id: id
});

export const fetchAllFollowers = (id) => {
  return dispatch => {
    return APIFollowUtil.fetchAllFollowers(id)
      .then(follows => dispatch(receiveAllFollows(follows)))
  }
};

// export const createFollow = (user_id, id) => {
//   debugger
//   return dispatch => {
//     return APIFollowUtil.followUser(user_id, id)
//       .then(follow => dispatch(receiveFollow(follow)))
//   }
// };

export const createFollow = (id) => {
  return dispatch => {
    return APIFollowUtil.followUser(id)
      .then(follow => dispatch(receiveFollow(follow)))
  }
};

export const destroyFollow = (id) => {
  return dispatch => {
    return APIFollowUtil.unfollowUser(id)
      .then(id => dispatch(removeFollow(follow)))
  }
}