import React from 'react';
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";

import * as Actions from "../../../actionCreators/uiActionCreators";


class Reset extends React.Component {

    constructor(props) {
        super(props);
        this.actions = bindActionCreators(Actions, props.dispatch);
    }

    render() {
        return (
            <div className="reset button"  title="re-starts the game" onClick={ () => this.actions.reset() }>{
                this.props.text
            }</div>
        );
    }
}

export default connect()(Reset);
