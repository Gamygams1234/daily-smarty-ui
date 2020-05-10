import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    // perfor requests here
    axios
      .get("https://api.dailysmarty.com/posts")
      .then((response) => {
        console.log("Axios response", response.data.posts);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.posts,
        });
      })
      .catch((error) => {
        console.log("Axios error", error);
      });
  };
}

export function fetchPostsWithQuery(query) {
  return function (dispatch) {
    // perfor requests here
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then((response) => {
        console.log("Axios response", response.data.posts);
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts,
        });
      })
      .catch((error) => {
        console.log("Axios error", error);
      });
  };
}
