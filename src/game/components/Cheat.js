import React from 'react';
import {
    connect
} from "react-redux";

import * as UI from "../actions/uiActions";

function Cheat(props) {
    return (
        <span  onClick={ () => props.dispatch(UI.cheat()) }>:</span>
    );
}

export default connect()(Cheat);
