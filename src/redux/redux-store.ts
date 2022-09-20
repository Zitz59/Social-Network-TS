import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileReducerType} from './profileReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './users-reducer';
import {dialogsReducer, dialogsReducerType} from './dialogsReducer';
import {authReducer, AuthReducerACType} from './auth-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appReducer, AppReducerACType} from './app-reducer';


export type ReduxStoreType = typeof store

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    users: usersReducer,
    auth:authReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionTypes>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionTypes
    >

export type AppActionTypes = dialogsReducerType | ProfileReducerType | AuthReducerACType | AppReducerACType
export default store;

// @ts-ignore
window.store = store;