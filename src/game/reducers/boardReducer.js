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
                ...initState,
                tiles: action.payload.tiles,
                cheating: state.cheating
            };
            break;

        case ActionTypes.UPDATE_TILES:
            state = {
                ...state,
                tiles: action.payload.tiles,
            };
            break;

        case ActionTypes.CLICK_TILE:
            state = {
                ...state,
                tiles: action.payload.tiles,
                turnsLeft: state.turnsLeft - 1
            };
            break;

        case ActionTypes.CHEAT:
            state = {
                ...state,
                cheating: !state.cheating
            };
            break;

        case ActionTypes.WIN_GAME:
            state = {
                ...state,
                won: true
            };
            break;

        case ActionTypes.LOSE_GAME:
            state = {
                ...state,
                lost: true
            };
            break;

        default:
            break;
    }

    return state;
}
