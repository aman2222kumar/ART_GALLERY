import { configureStore } from "@reduxjs/toolkit";

import dataFetchReducer from "./dataReducer";

const store = configureStore({
  reducer: {
    apiData: dataFetchReducer,
  },
});

export default store;
