
let rerenderEntireTree = () => {
    console.log('State changed')
}

export const subscribe = (observer: ()=> void) => {
    rerenderEntireTree = observer

}

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
    newMessageText:string

}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
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

export let addPost = () => {
    let newPost : PostsType = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''// null new post
    rerenderEntireTree();
}

export let changeNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(); // update post FLUX
}

export let addMessage = (dialogMessage:string) => {

    let newMessage : MessageType = {
        id:5,
        message:dialogMessage,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ' ' // null  new message
    rerenderEntireTree();
}

export let updateNewMessage = (newMessage:string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree();// update message FLUX
}





let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
        ],
        newPostText:'it-kamasutra.com',
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
        newMessageText: 'Hello World',
    } ,

    sideBar: [
        {
            id: 1,
            name: 'Alexey',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTetpXuW5y9MgX063lA3pYmNRgIiasWqTow&usqp=CAU'
        },
        {id: 2, name: 'Anton', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/788.jpg'},
        {
            id: 3,
            name: 'Ann',
            avatar: 'https://media.istockphoto.com/vectors/cartoon-young-girl-face-vector-illustration-of-beautiful-woman-avatar-vector-id923639308?b=1&k=20&m=923639308&s=170667a&w=0&h=dNz54KGP6e7MSDib2X6eGkbw4g-JLSdQaBp3pleK88M='
        }
    ]

}



export default state;