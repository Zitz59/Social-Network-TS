import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from './store';


export type ReduxStoreType = typeof store

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer
})

let store:StoreType = createStore(reducers);

export default store;