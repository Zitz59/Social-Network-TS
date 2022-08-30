import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileReducerType} from './profileReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './users-reducer';
import {dialogsReducer, dialogsReducerType} from './dialogsReducer';
import {authReducer, AuthReducerACType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


export type ReduxStoreType = typeof store

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    users: usersReducer,
    auth:authReducer,
    form:formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionTypes
    >

export type AppActionTypes = dialogsReducerType | ProfileReducerType | AuthReducerACType
export default store;

// @ts-ignore
window.store = store;