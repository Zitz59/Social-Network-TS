import {DialogsPageType, MessageType,} from './state';
import {ActionTypes} from './state';

type dialogsReducerType = AddMessageACType | UpdateNewMessageACType

type AddMessageACType = ActionTypes

type UpdateNewMessageACType = ActionTypes

const dialogsReducer = (state: DialogsPageType, action: dialogsReducerType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: 5,
                message: action.dialogMessage,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE':
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;

    }
}

export const addMessageAC = (dialogMessage: string) => {
    return {
        type: 'ADD-MESSAGE', dialogMessage: dialogMessage
    } as const
}

export const onMessageChangeAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE', newMessage: newMessage
    } as const
}





export default dialogsReducer;