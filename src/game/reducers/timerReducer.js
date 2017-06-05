const initState = {
    startedAt: undefined
};

export default function(state = initState, action) {

    switch (action.type) {

        case "CLICK_TILE":
            if (!state.timerGoing) {
                state = {
                    ...state,
                    startedAt: action.payload.now
                }
            }
            break;

        case "RESET":
            state = initState;
            break;

        default:
            break;

    }

    return state;
}
