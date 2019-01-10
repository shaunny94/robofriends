import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import {searchRobots} from './reducers';


const store = createStore(searchRobots)

ReactDOM.render( <Provider store={store}>
                 <App  />
                 </Provider>
                  ,document.getElementById('root'));
registerServiceWorker();
