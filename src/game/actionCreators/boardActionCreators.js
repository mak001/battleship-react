import * as Actions from "../actions/boardActions";

export function click(x, y, tile, tiles) {

    if (tile.clicked === true) {
        // so we don't get an error
        return Actions.doNothing();
    }

    let action = [];

    tiles = updateTile(x, y, tile, "clicked", true, tiles);
    action.push(Actions.clickTile(tiles));

    if (tile.ship !== undefined) {
        let ship = getShip(tile.ship, tiles);
        let shipSunk = ship.filter((s) => {
            return s.clicked === true;
        });

        if (shipSunk.length === ship.length) {
            action.push(Actions.sinkShip(tile.ship));

            if (allSunk(tiles)) {
                action.push(Actions.winGame());
            }

        }
    }

    // TODO - check lose

    return action;
}

function updateTile(x, y, tile, key, value, tiles) {
    tile = {
        ...tile,
        [key]: value
    }

    let tileRow = tiles[x].slice();
    tileRow[y] = tile;

    let ts = tiles.slice();
    ts[x] = tileRow;

    return ts;
}

function getShip(id, tiles) {
    tiles = [].concat.apply([], tiles);
    return tiles.filter((t) => {
        return t.ship === id;
    });
}

function getShips(tiles) {
    tiles = [].concat.apply([], tiles);
    return tiles.filter((t) => {
        return t.ship !== undefined;
    });
}

function allSunk(tiles) {
    let ships = getShips(tiles);
    let sunkShips = ships.filter((tile) => {
        return tile.clicked === true;
    });

    if (ships.length === sunkShips.length) {
        return true;
    }
    return false;
}
