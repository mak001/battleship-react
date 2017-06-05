const initState = {
    tiles: generate(10, 10, [5, 4, 3, 3, 2]),
    turnsLeft: 48
};

export default function(state = initState, action) {

    console.log(action);
    switch (action.type) {

        case "RESET":
            state = initState;
            break;

        case "CLICK_TILE":
            let x = action.payload.x;
            let y = action.payload.y;
            let t = clickTile(x, y, state);

            // t is false when tile was clicked
            if (t) {
                let tiles = state.tiles.slice();
                tiles[x][y] = t;

                state = { ...state,
                    tiles: tiles,
                    turnsLeft: state.turnsLeft - 1
                }
            }
            break;

        default:
            break;
    }

    return state;
}

function generate(width, height, ships) {
    let tiles = Array(10).fill().map(function() {
        return new Array(10).fill(null);
    });

    // TODO - generate

    return tiles;
}

function clickTile(x, y, state) {
    let t = state.tiles[x][y];

    if (t != null && t.clicked === true) return false;

    if (t != null && t.isShip === true) {
        return {
            isShip: true,
            clicked: true
        };
    }

    return {
        clicked: true
    };
}
