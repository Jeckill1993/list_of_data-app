import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} getList={store.getList.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerender(store.state);

store.subscribe(rerender);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
