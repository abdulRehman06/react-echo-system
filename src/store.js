
import { createStore, combineReducers } from 'redux'
import {reducerTodo , isLoading  } from './todos/reducer'

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {applyMiddleware} from 'redux'
import  thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = {
    reducerTodo,
    isLoading  // show loading msg if data is fetching from server
};
const rootReducer = combineReducers(reducer);

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(  applyMiddleware(thunk) ) // composeWithDevTools  adding dev-tool  ext for state management
);

export const store = configureStore();
export const persistor = persistStore(store);