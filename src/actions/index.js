import { SET_RECENT_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    // perfor requests here
    axios
      .get("https://api.dailysmarty.com/posts")
      .then((res) => {
        console.log("Axios response", res.data.posts);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: res.data.posts,
        });
      })
      .catch((error) => {
        console.log("Axios error", error);
      });
  };
}
