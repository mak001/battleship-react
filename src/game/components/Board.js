import React from 'react';
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";

import Tile from './Tile';

import * as Actions from "../actionCreators/boardActionCreators";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.actions = bindActionCreators(Actions, props.dispatch);
    }

    renderTile(x, y) {
        let tiles = this.props.tiles;
        let tile = tiles[x][y];
        return (
            <Tile
                key={ x + '-' + y }
                tile={ tile }
                cheating={ this.props.cheating }
                onClick={ () => this.actions.click(x, y, tile, tiles) }
            />
        );
    }

    renderRow(row, x) {
        return (
            <div id="tilerow" key={ x }>
                {
                    row.map((row, y) => (
                        this.renderTile(x, y)
                    ))
                }
            </div>
        );
    }

    renderRows() {
        return this.props.tiles.map((row, x) => (
            (
                this.renderRow(row, x)
            )
        ));
    }

    render() {
        if (this.props.tiles === undefined) {
            return (
                <div></div>
            );
        }
        return (
            <div id="ship-table">
                { this.renderRows() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tiles: state.board.tiles,
        cheating: state.board.cheating
    };
}

export default connect(mapStateToProps)(Board);
