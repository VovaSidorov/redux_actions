import {combineReducers, createStore} from 'redux';
import reducer from "./reducer";

let reducers = combineReducers({
    reducer: reducer,
})

let store = createStore(reducers);
window.store = store;

export default store;