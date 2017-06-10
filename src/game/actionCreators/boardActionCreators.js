import * as Actions from "../actions/boardActions";
import * as Generator from "../helpers/Generator";

export function click(x, y, tile, tiles, turnsLeft) {

    if (tile.clicked === true) {
        // so we don't get an error
        return Actions.doNothing();
    }

    let action = [];

    tiles = updateTile(x, y, tile, "clicked", true, tiles);
    action.push(Actions.clickTile(tiles));

    if (clickedTiles(tiles).length === 0) {
        action.push(Actions.startTime());
    }

    if (tile.ship !== undefined) {
        let ship = getShip(tile.ship, tiles);
        let shipSunk = ship.filter((s) => {
            return s.clicked === true;
        });

        if (shipSunk.length === ship.length) {
            action.push(Actions.sinkShip(tile.ship));

            if (allSunk(tiles)) {
                action.push(Actions.winGame());
                action.push(Actions.endTime());
            }

        }
    }

    // next move will be 0
    if (turnsLeft === 1) {
        action.push(Actions.loseGame());
        action.push(Actions.endTime());
    }

    return action;
}

export function generate() {
    return Actions.updateTiles(Generator.generate());
}

function clickedTiles(tiles) {
    return [].concat.apply([], tiles).filter(() => {
        return tiles.clicked;
    });
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
