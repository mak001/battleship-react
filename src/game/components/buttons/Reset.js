import React from 'react';
import {
    connect
} from "react-redux";

import * as UI from "../../actions/uiActions";


function Reset(props) {
    return (
        <div className={ "reset" }  title="re-starts the game" onClick={ () => props.dispatch(UI.reset()) }>Reset</div>
    );
}

export default connect()(Reset);
