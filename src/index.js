import React, { Component } from 'react';
import {NetInfo } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterPage from './RouterPage';
class FalGuru extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (

        <Provider store={store}>
            <RouterPage/>
        </Provider>
    );
  }
}

export default FalGuru;
