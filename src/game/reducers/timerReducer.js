import {
    ActionTypes
} from "../actions/ActionTypes";

const initState = {
    startedAt: undefined,
    endedAt: undefined
};

export default function(state = initState, action) {

    switch (action.type) {

        case ActionTypes.START_TIME:
            if (!state.startedAt) {
                state = {
                    ...state,
                    startedAt: action.payload.now
                }
            }
            break;

        case ActionTypes.END_TIME:
            state = {
                ...state,
                endedAt: action.payload.now
            };
            break;

        case ActionTypes.RESET:
            state = initState;
            break;

        default:
            break;

    }

    return state;
}
