import axios from 'axios';

export const FETCH_SEARCH_DATA = "FETCH_SEARCH_DATA";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SeARCH_FAILURE";

export const fetchMovies = (search) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_DATA });
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=7d010765`)
      .then((res) => {
        dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SEARCH_FAILURE,
          payload: err,
        });
      });
  };
};