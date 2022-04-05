//import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {modalReducer} from "./reducers/modal-reducer";

const reducers = combineReducers({
    modal: modalReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;