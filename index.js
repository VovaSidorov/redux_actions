console.log("App was loaded...");


const { createStore } = window.Redux;
const { createActions, handleActions, combineActions } = window.ReduxActions;
const defaultState = {
    counter: 0,
    addTextState: ""
};

// const increment = createAction('INCREMENT');
// const decrement = createAction('DECREMENT');
// const myltiply = createAction('MYLTIPLY');

// const { increment, decrement,myltiply } = createActions('INCREMENT', 'DECREMENT','MYLTIPLY');
const { increment, decrement,myltiply, addtext } = createActions({
    INCREMENT: (amount = 1) => ({ amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount }),
    MYLTIPLY: (amount = 5) => ({ amount: amount }),
    ADDTEXT: (newTextAction ) => ({ amount: newTextAction }),
});

// const reducer = handleActions(
//     {
//         [combineActions(increment, decrement,myltiply)]: (
//             state,
//             { payload: { amount } }
//         ) => {
//             return { ...state, counter: state.counter + amount };
//         },
//
//
//     },
//     defaultState
// );


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
            return {...state, addTextState: state.addTextState+amount };
        }
    },
    defaultState
);

const store = createStore(reducer, defaultState);

const content = document.getElementById('content');
const render = () => {
    // content.innerHTML = store.getState().counter;
    content.innerHTML = store.getState().addTextState;
};

store.subscribe(render);

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrement());
});
document.getElementById('multiply').addEventListener('click', () => {
    store.dispatch(myltiply());
});
document.getElementByIdad('addtext').addEventListener('click', () => {
    store.dispatch(addtext("NEW TEXT INPUT"));
});