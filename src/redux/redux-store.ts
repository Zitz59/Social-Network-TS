import {combineReducers,  createStore} from 'redux';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './users-reducer';
import {dialogsReducer} from './dialogsReducer';
import {authReducer} from './auth-reducer';

export type ReduxStoreType = typeof store

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    users: usersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


export default store;