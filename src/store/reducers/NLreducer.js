import {
    ADD_NOMINATION,
    DELETE_NOMINATION,
    COMPLETE_NOMINATION,
} from '../actions/NLactions';

const defaultState = {
    nominatedList: [],
    isCompleted: false,
  };
function NLreducer(state = defaultState, action){
    switch(action.type){
        // ADD
        case ADD_NOMINATION:
            return {
                ...state,
                nominatedList: [...state.nominatedList, action.payload],
            };
        // DELETING
        case DELETE_NOMINATION:
            const newNom = state.nominatedList.filter(movie => movie.Title !== action.payload)
            return {
                ...state,
                nominatedList: newNom,
            };
        // NOM COMPLETED
        case COMPLETE_NOMINATION:
            return {
                ...state,
                isCompleted: action.payload,
            }
        default: return state
    }
}
export default NLreducer;