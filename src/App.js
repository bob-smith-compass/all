import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
/**
 * Move to Server.js all socket.io related code
 */
// import soketIO from 'socket.io'; // Module not found: Can't resolve 'uws' in '/Users/v738110/Compass/Redux/all/node_modules/engine.io/lib'

/**
 * Redux State management to be moved to a separate file
 * or use react-redux
 */
import { createStore } from 'redux';
import MObservable from './components/observable/Observable';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1



class App extends Component {
  render() {
    return (
      <div>
        <h3>All</h3>
        {store.getState()}
        <MObservable />
      </div>
    );
  }
}

export default App;
