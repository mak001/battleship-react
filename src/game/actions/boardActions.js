import {
    ActionTypes
} from "../actions/ActionTypes";

export function doNothing() {
    return {
        type: ActionTypes.DO_NOTHING
    };
}

export function startTime() {
    return {
        type: ActionTypes.START_TIME,
        payload: {
            now: new Date().getTime()
        }
    };
}

export function endTime() {
    return {
        type: ActionTypes.END_TIME,
        payload: {
            now: new Date().getTime()
        }
    };
}

export function updateTiles(tiles) {
    return {
        type: ActionTypes.UPDATE_TILES,
        payload: {
            tiles: tiles
        }
    };
}

export function clickTile(tiles) {
    return {
        type: ActionTypes.CLICK_TILE,
        payload: {
            tiles: tiles
        }
    };
}

export function sinkShip(id) {
    return {
        type: ActionTypes.SINK_SHIP,
        payload: {
            shipID: id
        }
    };
}

export function winGame() {
    return {
        type: ActionTypes.WIN_GAME
    }
}

export function loseGame() {
    return {
        type: ActionTypes.LOSE_GAME
    }
}

export function generate(w = 10, h = 10, ships = [5, 4, 3, 3, 2]) {
    return {
        type: "GENERATE_TILES",
        payload: {
            width: w,
            height: h,
            ships: ships
        }
    };
}
