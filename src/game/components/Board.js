import React from 'react';
import {
    connect
} from "react-redux";

import Tile from './Tile';

import * as Tiles from "../actions/boardActions";

class Board extends React.Component {

    renderTile(x, y) {
        return (
            <Tile
                key={ x + '-' + y }
                tile={ this.props.tiles[x][y] }
                cheating={ this.props.cheating }
                onClick={ () => this.props.dispatch(Tiles.clickTile(x, y)) }
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
