import React from 'react';
import {
    connect
} from "react-redux";

import Timer from "./Timer";
import Reset from "./buttons/Reset";

class Heading extends React.Component {

    render() {
        return (
            <div id="top-bar">
                <div title="turns left">
                    Turns: { this.props.turnsLeft }
                </div>
                <Reset />
                <Timer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        turnsLeft: state.board.turnsLeft,
        time: state.board.time
    };
}

export default connect(mapStateToProps)(Heading);
