import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {addMessageAC, initialStateType, onMessageChangeAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux'
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


// type DialogsContainerPropsType = {
//     // dialogs: Array<DialogsType>
//     // messages: Array<MessageType>
//     // newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     store: ReduxStoreType
// }

// const DialogsContainer = (/*props: DialogsContainerPropsType*/) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store:StoreType) => {
//                 let state = store.getState();
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
//                 }
//
//                 let onMessageChange = (newMessage: string) => {
//                     store.dispatch(onMessageChangeAC(newMessage))
//                 }
//
//                 return <Dialogs addMessage={addMessage}
//                                 onMessageChange={onMessageChange}
//                                 dialogs={state.dialogsPage.dialogs}
//                                 messages={state.dialogsPage.messages}
//                                 newMessageText={state.dialogsPage.newMessageText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }


export type MapStatePropsType = {
    dialogsPage:initialStateType
}

export type MapDispatchPropsType = {
    addMessage:(dialogMessage:string)=>void
    onMessageChange:(newMessage: string)=>void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {dialogsPage: state.dialogsPage}
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessage: (dialogMessage: string) => {
            dispatch(addMessageAC(dialogMessage))
        },
        onMessageChange: (newMessage: string) => {
            dispatch(onMessageChangeAC(newMessage))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;