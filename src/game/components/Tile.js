import React from 'react';

export default function Tile(props) {
    var classes = "tile";

    if (props.tile != null) {
        if (props.tile.clicked) {
            if (props.tile.ship !== undefined) {
                classes += " hit";
            } else {
                classes += " missed";
            }
        } else if (props.cheating && props.tile.ship !== undefined) {
            classes += " ship-" + props.tile.ship;
        }
    }

    return (
        <div
            className={ classes }
            onClick={ props.onClick }
        ></div>
    );
}
