import axios from 'axios';

export const FETCH_SEARCH_DATA = "FETCH_SEARCH_DATA";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";

export const CLEAR_SEARCH = "CLEAR_SEARCH";


export const fetchMovies = (search) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_DATA });
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=7d010765`)
      .then((res) => {
        const newArray = res.data.Search
        dispatch({ type: FETCH_SEARCH_SUCCESS, payload: newArray });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SEARCH_FAILURE,
          payload: err,
        });
      });
  };
};

export const clearMovies = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_SEARCH});
  }
}


// gonna use this for searchList
export const paginate = (a) => {
  let results = [];
  const mr = 4;
  if(a !== undefined){
    if(a.length < 5){
      return a;
    }else {
      const maxPages = Math.ceil(a.length/mr)
      for(let i = 0; i < maxPages; i++){
        results[i] = a.slice(mr*i, mr*i+mr);
      }
      return results;
    }
  }

}
