import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';

import Game from './game/components/Game';
import store from './game/store';

import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(
    <Provider store={ store }>
        <Game />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
