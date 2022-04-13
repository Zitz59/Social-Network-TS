export type MessageType = {
    id:number
    message:string
}

export type DialogsType = {
    id:number
    name:string
}

export type PostsType = {
    id:number
    message:string
    likesCount:number
}

export type DialogsPageType = {
    dialogs:Array<DialogsType>
    message:Array<MessageType>

}

export type ProfilePageType = {
    posts:Array<PostsType>
}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}






let state = {
    profilePage:{
         posts : [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
        ]
    }
    ,
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'Alexey'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Ann'},
            {id: 4, name: 'Ksu'},
            {id: 5, name: 'Max'},
            {id: 6, name: 'Stanz Wizard'},
            {id: 7, name: 'Dima'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Where is my money?'},
            {id: 3, message: 'Miss You'},
            {id: 4, message: 'Yo Yo'},
            {id: 5, message: 'Learn React!'},
            {id: 6, message: 'How are you?'},
            {id: 7, message: 'Miss You'},
        ]
    }
}

export default state;