import {
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    CLEAR_SEARCH,

} from '../actions/SLactions';

const defaultState = {
    searchList: [],
    isFetching: false,
    error: "",
  };
function SLreducer(state = defaultState, action){
    switch(action.type){
        // FETCH
        case FETCH_SEARCH_DATA:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                searchList: action.payload,
                error: "",
            };
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                searchList: '0 results found',
                error: action.payload,
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                searchList: []
            }
        default: return state
    }
}
export default SLreducer;