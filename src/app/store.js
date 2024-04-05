import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import claimReducer from "../features/claim/claimSlice";
import alertReducer from "../features/alert/alertSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  login: loginReducer,
  claim: claimReducer,
  alert: alertReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "claim", "alert"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
