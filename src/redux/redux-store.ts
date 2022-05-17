import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type PropsType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer
})

let store = createStore(reducers);

export default store;