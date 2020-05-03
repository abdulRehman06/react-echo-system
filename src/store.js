
import { createStore, combineReducers } from 'redux'
import reducers from './todos/reducer'

import { persistReducer  , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reducer = reducers;
const rootReducer = combineReducers({
    reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

 const configureStore = () => createStore(persistedReducer);
  
 export const store = configureStore();
 export const persistor = persistStore(store);