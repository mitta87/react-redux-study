import { combineReducers, createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

let reducer = combineReducers({counter, visibilityFilter});
let store = createStore(reducer);
store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

