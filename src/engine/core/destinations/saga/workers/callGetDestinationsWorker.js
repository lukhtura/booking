// Core
import { call, put, delay } from "redux-saga/effects";

// Engine
import { setLoading } from "@/engine/core/destinations/slice";
import api from "@/engine/config/axios";

export function* callGetDestinationsWorker() {
    try {
        yield put(setLoading(true));
        const response = yield call(api.getDestinations);
        console.log(response);
        yield delay(2000);
        yield put(setLoading(false));
    } catch (error) {
        console.warn(error)
    }
};