import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers,{},applyMiddleware(reduxThunk));
　
//dummy reducer
ReactDOM.render(
<Provider store={store}><App /></Provider>,
document.querySelector('#root'));

//console.log('STRIPE KEY IS',process.env.REACT_APP_STRIPE_KEY);
//console.log('Enviroment is',process.env.NODE_ENV);
//1 root component ,2 what you want to render 
//provider path the store and childe app in provider 