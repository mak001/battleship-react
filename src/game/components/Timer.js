import React from "react";
import {
    connect
} from "react-redux";

import Cheat from "./Cheat";

class Timer extends React.Component {

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    pad(time, length) {
        while (time.length < length) {
            time = '0' + time;
        }
        return time;
    }

    getElapsed() {
        if (!this.props.startedAt) {
            return (
                <div>
                    00< Cheat / >00
                </div>
            );
        } else {
            let time = new Date().getTime() - this.props.startedAt;

            let m = this.pad(Math.floor((time / 1000 / 60) % 60).toString(), 2);
            let s = this.pad(Math.floor((time / 1000) % 60).toString(), 2);

            return `${m}:${s}`;
        }
    }

    render() {
        return (
            <div>
                { this.getElapsed() }
            </div>
        );
    }

}


function mapStateToProps(state) {
    console.log(state);
    return {
        startedAt: state.timer.startedAt
    };
}

export default connect(mapStateToProps)(Timer);
