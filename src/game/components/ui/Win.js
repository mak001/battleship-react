import React from 'react';
import {
    connect
} from "react-redux";

import Reset from "./buttons/Reset";

class Win extends React.Component {

    render() {

        let classes = "screen-overlay";
        if (this.props.won) {
            classes += " show";
        }

        return (
            <div className={ classes }>
                <div className="screen-overlay-text">
                    <h2>You Won!</h2>
                    <Reset
                        text="Play again"
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        won: state.board.won,
    };
}

export default connect(mapStateToProps)(Win);
