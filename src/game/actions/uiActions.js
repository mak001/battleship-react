import {
    ActionTypes
} from "../actions/ActionTypes";

import {
    generate
} from "../helpers/Generator";

export function cheat() {
    return {
        type: ActionTypes.CHEAT
    };
}

export function reset() {
    return {
        type: ActionTypes.RESET,
        payload: {
            tiles: generate()
        }
    };
}
