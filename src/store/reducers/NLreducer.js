import {
    ADD_NOMINATION,
    DELETE_NOMINATION,
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
            return {
                ...state,
                nominatedList: state.nominatedList.filter(movie => movie.Title !== action.payload),
            };
        // NOM COMPLETED
        // case NOMINATION_COMPLETED:
        //     return {
        //         ...state,
        //         isCompleted: true,
        //     }
        default: return state
    }
}
export default NLreducer;