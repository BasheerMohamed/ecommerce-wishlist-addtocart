import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import ecommerceReducer from './slice'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, ecommerceReducer);

export const store = configureStore({
    reducer: {
        ecommerce: persistedReducer,
    },
});

export const persistor = persistStore(store);