import {
    createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";
import multi from "redux-multi";

import reducer from "./reducers";

const middleware = applyMiddleware(logger, multi);

export default createStore(reducer, middleware);
