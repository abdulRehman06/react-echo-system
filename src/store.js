
import { createStore, combineReducers } from 'redux'
import reducers from './todos/reducer'


const reducer = reducers;
const rootReducer = combineReducers({
    reducer,
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore() ;