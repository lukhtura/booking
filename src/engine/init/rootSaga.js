// Core
import { all, call } from "redux-saga/effects";

// Engine
import { destinationsWatcher } from "@/engine/core/destinations/saga/watcher";



export function* rootSaga() {
    yield all([
        call(destinationsWatcher)
    ])
}