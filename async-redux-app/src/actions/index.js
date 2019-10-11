import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getData = () => dispatch => {
  const key = "$2a$10$C/tklD3YDvK3q0bbsayVCO9cZoVfu7ReyUSul/IdyZyUIpBOC3SCy";
  const url = `https://www.potterapi.com/v1/characters/`;
  dispatch({ type: FETCHING_START });
  console.log("start");
  axios
    // the syntax for including the api key for the harry potter API
    .get(`${url}?key=${key}`)
    .then(res => {
      console.log("fetch start", res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FAILURE,
        payload: `${err.response.message} ${err.response.code}`
      });
    });
};
