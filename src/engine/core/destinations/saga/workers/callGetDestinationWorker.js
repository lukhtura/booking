// Core
import { put, delay } from "redux-saga/effects";

// Engine
import setLoading from "@/engine/core/destinations/slice";

export function* callgetDestinationsWorker() {
    try {
        yield put(setLoading(true))
        yield delay(2000)
        yield put(setLoading(false))

    } catch (e) {
        console.warn(e)
    }
};