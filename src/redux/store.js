import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import pageReducer2 from "../steps/s2/pages/pageFirst_nameLast_name/BLL/pageReducer2";
import profileReducer from "../pages/profileIgnatZakalinsky/BLL/profileReducer";
import pageReducer3 from "../steps/s3/pages/pageFirst_nameLast_name/BLL/pageReducer3";
import pageReducer4 from "../steps/s4/pages/pageFirst_nameLast_name/BLL/pageReducer4";


let reducers = combineReducers({
    profile: profileReducer,
    page2: pageReducer2,
    page3: pageReducer3,
    page4: pageReducer4,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store
