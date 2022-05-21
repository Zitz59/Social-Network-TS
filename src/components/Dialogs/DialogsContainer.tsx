import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import store, {ActionTypes, DialogsType, MessageType, StoreType} from '../../redux/store';
import {addMessageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {ReduxStoreType} from '../../redux/redux-store';
import StoreContext from '../../StoreContext';


// type DialogsContainerPropsType = {
//     // dialogs: Array<DialogsType>
//     // messages: Array<MessageType>
//     // newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     store: ReduxStoreType
// }

const DialogsContainer = (/*props: DialogsContainerPropsType*/) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
                }

                let onMessageChange = (newMessage: string) => {
                    store.dispatch(onMessageChangeAC(newMessage))
                }

                return <Dialogs addMessage={addMessage}
                                onMessageChange={onMessageChange}
                                dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;