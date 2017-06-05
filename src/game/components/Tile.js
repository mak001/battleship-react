import React from 'react';

export default function Tile(props) {
    var classes = "tile";

    if (props.tile != null) {
        if (props.tile.clicked) {
            if (props.tile.isShip) {
                classes += " hit";
            } else {
                classes += " missed";
            }
        }
    }

    return (
        <div
            className={ classes }
            onClick={ props.onClick }
        ></div>
    );
}
