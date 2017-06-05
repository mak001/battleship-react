import {
    combineReducers
} from "redux";

import board from "./boardReducer";
import timer from "./timerReducer";

export default combineReducers({
    board,
    timer
});
