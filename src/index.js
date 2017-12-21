// Imports and modules
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './component';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './REDUCER';
//store creation
const store =  createStore(reducer);

//rendering and subscribing to the store
const rendering = ()=>{
render(<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));
console.log(store.getState());
}
rendering();
store.subscribe(rendering);
