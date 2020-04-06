import { increment, decrement, myltiply, addtext, changetext } from "./actions"
import { handleActions } from 'redux-actions';

const defaultState = {
    counter: 0,
    changeMessage:"",
    addTextState: "dfgdfgdfgdfgd"
};

const reducer = handleActions(
    {
        [increment]: (state, { payload: { amount } }) => {
            return { ...state, counter: state.counter + amount };
        },
        [decrement]: (state, { payload: { amount } }) => {
            return { ...state, counter: state.counter + amount };
        },
        [myltiply]: (state, { payload: { amount } }) => {
            return { ...state, counter: state.counter * state.counter };
        },
        [addtext]: (state, { payload: { amount } }) => {
            return {...state, addTextState: amount };
        },
        [changetext]: (state, { payload: { amount } }) => {
            return {...state, changeMessage: amount };
        }
    },
    defaultState
);

export default reducer;