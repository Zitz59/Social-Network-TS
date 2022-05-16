import {DialogsPageType, MessageType,} from './store';
import {ActionTypes} from './store';

type dialogsReducerType = AddMessageACType | UpdateNewMessageACType

type AddMessageACType = ActionTypes

type UpdateNewMessageACType = ActionTypes

type initialStateType = DialogsPageType


let initialState:initialStateType = {

    dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Ann'},
        {id: 4, name: 'Ksu'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Stanz Wizard'},
        {id: 7, name: 'Dima'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Where is my money?'},
        {id: 3, message: 'Hey!'},
        {id: 4, message: 'Abrvalg'},
        {id: 5, message: 'Learn React!'},
        {id: 6, message: 'How are you?'},
        {id: 7, message: 'Yo!'},
    ],
    newMessageText: ''
}


const dialogsReducer = (state=initialState, action: dialogsReducerType) => {
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