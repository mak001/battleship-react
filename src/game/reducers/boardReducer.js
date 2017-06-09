import {
    ActionTypes
} from "../actions/ActionTypes";

const initState = {
    tiles: Array(10).fill().map(function() {
        return new Array(10).fill({});
    }),
    turnsLeft: 48
};

export default function(state = initState, action) {

    switch (action.type) {

        case ActionTypes.RESET:
            state = {
                ...state,
                tiles: action.payload.tiles
            };
            break;

        case ActionTypes.UPDATE_TILES:
            state = {
                ...state,
                tiles: action.payload.tiles,
                // TODO - move this
                turnsLeft: state.turnsLeft - 1
            };
            break;

        case ActionTypes.CHEAT:
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
