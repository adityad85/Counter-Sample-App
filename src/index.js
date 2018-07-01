import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
// import createStore from '';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const counterReducer = (state = {counter : 0}, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'RESET':
            return {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counterState: counterReducer,
});

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
