// Core
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Engine
import destinations from "@/engine/core/destinations/slice";
import hotels from "@/engine/core/hotels/slice";
import { rootSaga } from "@/engine/init/rootSaga";

// Middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        destinations, hotels
    },
    middleware: () => [sagaMiddleware]
},);

sagaMiddleware.run(rootSaga);