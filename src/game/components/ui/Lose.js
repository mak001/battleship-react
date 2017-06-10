import React from 'react';
import {
    connect
} from "react-redux";

import Reset from "./buttons/Reset";

class Lose extends React.Component {

    render() {

        let classes = "screen-overlay";
        if (this.props.lost) {
            classes += " show";
        }

        return (
            <div className={ classes }>
                <div className="screen-overlay-text">
                    <h2>You Lost...</h2>
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
        lost: state.board.lost,
    };
}

export default connect(mapStateToProps)(Lose);
