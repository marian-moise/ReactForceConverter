import React, {useReducer} from 'react';
/*useReducer is a hook that lets you optimize performance for components that
trigger deep updates because you can pass dispatch down instead of
callbacks.*/
import './App.css';
import Input_one from "./components/Input_one";
import Input_two from "./components/Input_two";




//create Context object
/*Context is primarily used when some data needs to be accessible
by many components at different nesting levels.*/
export const AppContext = React.createContext();

//set up initial state
/*set Initial state object, where we store our data, which should
be accessible from both Inputs.*/
const initialState = {
    inputText: 0,
}

//function reducer will update the initial state every time when the
//value of any inputs will change
//the functiom will be used with useReducer hook
function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                inputText: action.data
            }
        default:
            return initialState
    }
}


function App() {
    //initialize useReducer state - hooks can be initialized only inside functions
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
                <p className='title1'>Kilogram To Newton Converter</p>
                <hr/>
                {/*
the last part is to wrap components imput_one and input_two in AppContext.Provider
Every Context object comes with a Provider React component that allows consuming
components to subscribe to context changes. Providers can be nested to override
values deeper within the tree
*/}
                <AppContext.Provider value={{state, dispatch}}>
                    <p className = 'title2' >Kilograms</p>
                    <Input_one className = 'input1'/>
                    <p className = 'title3'>Newtons</p>
                    <Input_two id = 'input2'/>
                </AppContext.Provider>
                {/*/////////////////////////////////////////////////////////*/}
            </header>
        </div>
    );
}

export default App;
