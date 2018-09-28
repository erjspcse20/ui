import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './action/expenses';
import 'normalize.css/normalize.css';
//import './styles/styles.scss';
import './styles/css/bootstrap.css';
//import './styles/css/font-awesome.css';
//import './styles/css/icomoon.css';
//import './styles/css/styles.css';
import './styles/css/mystyles.css';
import './styles/css/switcher.css';
import './styles/css/bright-turquoise.css';
import './styles/css/turkish-rose.css';
import './styles/css/salem.css';
import './styles/css/hippie-blue.css';
import './styles/css/mandy.css';
import './styles/css/green-smoke.css';
import './styles/css/horizon.css';
import './styles/css/cerise.css';
import './styles/css/brick-red.css';
import './styles/css/de-york.css';
import './styles/css/shamrock.css';
import './styles/css/studio.css';
import './styles/css/leather.css';
import './styles/css/denim.css';
import './styles/css/scarlet.css';
//import './firebase/firebase';

const store = configureStore();

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
