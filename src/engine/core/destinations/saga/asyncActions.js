// Core
import { createAction } from "@reduxjs/toolkit";

const destinationsAsyncActions = {
    getDestinationsAsync: createAction("GET_DESTINATIONS_ASYNC")
};

export const { getDestinationsAsync } = destinationsAsyncActions;