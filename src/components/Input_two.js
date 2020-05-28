import React, {useContext} from 'react';
import {AppContext} from "../App";
import './inportStyle.css'

function Input_two() {
    const {state, dispatch} = useContext(AppContext);
    const changeInputValue = (newValue) => {
        dispatch({
            type: 'UPDATE_INPUT',
            data: newValue
        });
    }

    return (
        <div className="input2">
            <input type="text"
                   placeholder="Type Value"
                   value={state.inputText * 9.81}
                   onChange={event => changeInputValue(event.target.value)}/>
        </div>
    );
}

export default Input_two;
