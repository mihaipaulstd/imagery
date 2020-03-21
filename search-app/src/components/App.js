import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import SearchForm from './SearchForm';
import ImageCardContainer from './ImageCardContainer'
import Modal from './Modal'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

// const store = createStore(reducers, applyMiddleware(thunk));

const App = () => 
  <Provider store={ store }>
    <div className="App container">
      <SearchForm />
      <ImageCardContainer />
      <Modal />
    </div>
  </Provider>


export default App;