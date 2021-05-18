import { combineReducers } from "redux";
import SLreducer from './SLreducer';
import NLreducer from './NLreducer';

export default combineReducers({ 
    SLreducer,
    NLreducer 
});