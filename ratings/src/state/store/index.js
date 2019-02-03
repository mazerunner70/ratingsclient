import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../registersagas';

const reducer = combineReducers({
    dummy: (state={}, action) => {return {}},
})

const sagaMiddleware = createSagaMiddleware();
const initialState = {}

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware),
)

registerWithMiddleware(sagaMiddleware);