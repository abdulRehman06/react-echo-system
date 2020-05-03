
import {createStore  , combineReducers} from 'redux'
import reducers from './todos/reducer'

const reducer = reducers;

const rootReducer = combineReducers({
    reducer,
});

export const configureStore = () => createStore(rootReducer);