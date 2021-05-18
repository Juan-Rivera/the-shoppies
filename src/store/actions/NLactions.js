export const ADD_NOMINATION = "ADD_NOMINATION";
export const DELETE_NOMINATION = "DELETE_NOMINATION";
export const COMPLETE_NOMINATION = "COMPLETE_NOMINATION";

export const addNomination = (movie) => {
    return (dispatch) => {
      dispatch({ type: ADD_NOMINATION, payload: movie });
    }
  };

export const deleteNomination = (movie) => {
  console.log(movie)
    return (dispatch) => {
      dispatch({ type: DELETE_NOMINATION, payload: movie.Title });
    }
  };
export const nomCompleted = (bool) => {
  return(dispatch) => {
    dispatch({ type: COMPLETE_NOMINATION, payload: bool })
  }
}
  export default {
    addNomination,
    deleteNomination,
    nomCompleted,
  }