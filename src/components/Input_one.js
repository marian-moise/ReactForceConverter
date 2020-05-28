import React, {useContext} from 'react';
import {AppContext} from "../App";
import {input} from './inputStyle';


function Input_one() {
    //to use our state values inside component:
    const {state, dispatch} = useContext(AppContext);
    //adding function witch will update state inputText value using
    //dispatch. Function will be called each time we type something
    //in any input

    const changeInputValue = (newValue) => {
        dispatch({
            type: 'UPDATE_INPUT',
            data: newValue,
        });
    }

    return (
        <div className="input1">
            <input type="text"
                   placeholder="Type Value"
                   value={state.inputText}
            onChange={event => changeInputValue(event.target.value)}/>
        </div>
    );
}

export default Input_one;
