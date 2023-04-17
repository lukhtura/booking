// Core
import { takeEvery } from "redux-saga/effects";

// Engine
import { getDestinationsAsync } from "@/engine/core/destinations/saga/asyncActions";
import { callgetDestinationsWorker } from "@/engine/core/destinations/saga/workers/";


export function* destinationsWatcher() {
    yield takeEvery(getDestinationsAsync.type, callgetDestinationsWorker)
};