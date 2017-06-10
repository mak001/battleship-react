import React from 'react';

import Heading from './ui/Heading';
import Win from './ui/Win';
import Lose from './ui/Lose';
import Board from './Board';

class Game extends React.Component {

    render() {
        return (
            <div>
                <Heading />
                <Board />
                <Win />
                <Lose />
            </div>
        );
    }
}

export default Game;
