import React from "react";
import {connect} from "react-redux";
import {addtext,changetext} from "../../redux/actions";

const App = (props) => {
    console.log(props.newText);
    console.log(props.addNewText);

    let newMessageBody = props.changeMessage;

    let onNewMessageChange=(e)=>{
        let body = e.target.value;
        props.changeText(body);
    };

    let setNewMessage = ()=>{
        props.addNewText("sdfdsfsdfsdfsdf");
    }

    return (
        <div>
            <button>INCREMENT</button>
            <button>DECREMENT</button>
            <button>multiplyByTwo</button>
            <input onChange={onNewMessageChange}
                   value={newMessageBody}/>
            <button onClick={()=>setNewMessage()}>Add Text</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        newText: state.reducer.addTextState,
        changeMessage: state.reducer.changeMessage,
    }
};

let mapDispatchToProps = (dispatch)=>({
 addNewText: (newText) => dispatch(addtext(newText)),
    changeText: (changeNewText) => dispatch(changetext(changeNewText))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);