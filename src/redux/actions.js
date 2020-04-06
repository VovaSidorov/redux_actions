import { createActions } from 'redux-actions';


export const { increment, decrement, myltiply, addtext, changetext } = createActions({
    INCREMENT: (amount = 1) => ({ amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount }),
    MYLTIPLY: (amount = 5) => ({ amount: amount }),
    ADDTEXT: (newTextAction ) => ({ amount: newTextAction }),
    CNGTEXT: (cngtext)=>({amount:cngtext})
});