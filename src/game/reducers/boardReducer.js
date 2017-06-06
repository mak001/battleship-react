const initState = {
    tiles: generate(10, 10, [5, 4, 3, 3, 2]),
    turnsLeft: 48
};

export default function(state = initState, action) {

    console.log(action);
    switch (action.type) {

        case "RESET":
            state = {
                ...state,
                tiles: generate(10, 10, [5, 4, 3, 3, 2]),
                turnsLeft: 48
            };
            break;

        case "CLICK_TILE":
            let x = action.payload.x;
            let y = action.payload.y;
            let t = clickTile(x, y, state);

            // t is false when tile was clicked
            if (t) {
                let tileRow = state.tiles[x].slice();
                tileRow[y] = t;

                let tiles = state.tiles.slice();
                tiles[x] = tileRow;

                state = { ...state,
                    tiles: tiles,
                    turnsLeft: state.turnsLeft - 1
                }
            }
            break;

        case "CHEAT":
            state = {
                ...state,
                cheating: !state.cheating
            };
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

    ships = ships.sort((a, b) => -(a - b));

    ships.forEach((ship, id) => (
        tiles = generateShip(tiles, ship, id)
    ));

    return tiles;
}

function generateShip(tiles, length, id) {
    let coords = [];
    let direction = Math.floor(Math.random() * 2);

    do {
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * tiles.length);
            col = Math.floor(Math.random() * (tiles[0].length - length + 1));
        } else {
            row = Math.floor(Math.random() * (tiles.length - length + 1));
            col = Math.floor(Math.random() * tiles[0].length);
        }

        for (var i = 0; i < length; i++) {
            if (direction === 1) {
                coords[i] = {
                    'x': row,
                    'y': col + i
                };
            } else {
                coords[i] = {
                    'x': row + i,
                    'y': col
                };
            }
        }
    } while (isColliding(tiles, coords));

    coords.forEach((t) => {
        tiles[t.x][t.y] = {
            ship: id
        };
    });

    return tiles;
}

function isColliding(tiles, coords) {
    let r = false;

    coords.forEach((t) => {
        let tile = tiles[t.x][t.y];
        if (tile !== null && tile.ship !== undefined) r = true;
    });

    return r;
}

function clickTile(x, y, state) {
    let t = state.tiles[x][y];

    if (t != null && t.clicked === true) return false;

    if (t != null && t.ship !== undefined) {
        return {
            ship: t.ship,
            clicked: true
        };
    }

    return {
        clicked: true
    };
}
