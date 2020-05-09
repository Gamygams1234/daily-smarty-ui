import { SET_RECENT_POSTS } from "../actions/types";

const initState = {
  posts: [],
  recentPosts: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      break;
      return [...state, (recentPosts: action.payload)];
    default:
      return state;
  }
}
