type dialogsReducerType = AddMessageACType | UpdateNewMessageACType

type AddMessageACType = ReturnType<typeof addMessage>

type UpdateNewMessageACType = ReturnType<typeof updateNewMessage>

export type DialogsInitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string

}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

let initialState: DialogsInitialStateType = {

    dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Ann'},
        {id: 4, name: 'Ksu'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Stanz Wizard'},
        {id: 7, name: 'Dima'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Where is my money?'},
        {id: 3, message: 'Hey!'},
        {id: 4, message: 'Abrvalg'},
        {id: 5, message: 'Learn React!'},
        {id: 6, message: 'How are you?'},
        {id: 7, message: 'Yo!'},
    ] as Array<MessageType>,
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: dialogsReducerType): DialogsInitialStateType => {
//another realization deep copy of state
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: 5,
                message: action.dialogMessage,
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        case 'UPDATE-NEW-MESSAGE':
            return {...state, newMessageText: action.newMessage}
        default:
            return state;
    }
}

export const addMessage = (dialogMessage: string) => ({type: 'ADD-MESSAGE', dialogMessage: dialogMessage}) as const

export const updateNewMessage = (newMessage: string) => ({type: 'UPDATE-NEW-MESSAGE', newMessage: newMessage}) as const

