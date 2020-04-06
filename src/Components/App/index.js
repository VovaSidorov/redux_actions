import React from "react";
import {connect} from "react-redux";
import {addtext, changetext} from "../../redux/actions";

const App = (props) => {
    console.log(props.newText);

    let newMessageBody = props.changeMessage;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body)
        props.changeText(body);
    };

    let setNewMessage = () => {
        props.addNewText(props.changeMessage);
    }

    let input;

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        props.dispatch(addtext(input.value))
                        input.value = ''
                    }}>
                        <input ref={node => input = node}/>
                        <button >
                            Add Todo
                        </button>
                    </form>
                </div>
            </div>
            <button>INCREMENT</button>
            <button>DECREMENT</button>
            <button>multiplyByTwo</button>
            <input onChange={onNewMessageChange}
                   value={props.newText}/>
            <button onClick={() => setNewMessage()}>Add Text</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        newText: state.reducer.addTextState,
        changeText: state.reducer.changeMessage,
    }
};

// let mapDispatchToProps = (dispatch) => ({
//     addNewText: (newText) => dispatch(addtext(newText)),
//     changeText: (changeNewText) => dispatch(changetext(changeNewText))
// })


export default connect(mapStateToProps)(App);