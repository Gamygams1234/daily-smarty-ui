import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    // perfor requests here
    axios
      .get("https://api.dailysmarty.com/posts")
      .then((response) => {
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

export function fetchPostsWithQuery(query, callback) {
  return function (dispatch) {
    // perfor requests here
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts,
        });
        callback();
      })
      .catch((error) => {
        console.log("Axios error", error);
      });
  };
}
