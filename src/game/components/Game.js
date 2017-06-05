import React from 'react';

import Heading from './Heading';
import Board from './Board';

class Game extends React.Component {

    render() {
        return (
            <div>
                <Heading />
                <Board />
            </div>
        );
    }
}

export default Game;
