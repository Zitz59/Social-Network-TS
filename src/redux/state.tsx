import profileReducer, {addPostAC, onPostChangeAC} from './profileReducer';
import dialogsReducer, {addMessageAC, onMessageChangeAC} from './dialogsReducer';

export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string

}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SidebarType[]
}

export type SidebarType = {
    id: number
    name: string
    avatar: string
}

export type  StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
            ],
            newPostText: '',
        }
        ,
        dialogsPage: {
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
            newMessageText: '',
        },

        sideBar: [
            {
                id: 1,
                name: 'Alexey',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTetpXuW5y9MgX063lA3pYmNRgIiasWqTow&usqp=CAU'
            },
            {
                id: 2,
                name: 'Anton',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVc48I1DV-C9AqL2887a1emxWmko1RKIWBZp9MQtgGfwENC-J4or7EF8Weg5JAo_nKOY&usqp=CAU'
            },
            {
                id: 3,
                name: 'Klava',
                avatar: 'https://media.istockphoto.com/vectors/cartoon-young-girl-face-vector-illustration-of-beautiful-woman-avatar-vector-id923639308?b=1&k=20&m=923639308&s=170667a&w=0&h=dNz54KGP6e7MSDib2X6eGkbw4g-JLSdQaBp3pleK88M='
            }
        ]

    },
    getState() {
        return this._state;
    },
    _onChange() {
        console.log('State changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sideBar=sidebarReducer(this._state.sideBar, action)
        this._onChange();

    }
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof onMessageChangeAC>


export default store;
