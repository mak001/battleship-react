import {
    ActionTypes
} from "../actions/ActionTypes";

export function doNothing() {
    return {
        type: ActionTypes.DO_NOTHING
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
