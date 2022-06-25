import users from '../components/Users/Users';

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<any>
type userReducerType = FollowACType | UnFollowACType | SetUsersACType


type LocationType= {
    city:string
    country:string
}

type UserType = {
    id:number,
    followed:boolean,
    fullName:string,
    status:string,
    location:LocationType
}

export type UsersInitialStateType =
    { [key: string]: Array<UserType> }




let initialState:UsersInitialStateType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Sohan',
            status: 'Learn react !!!',
            location: {city: 'Tel-a-Viv', country: 'Israel'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Ivan',
            status: 'Drinking vodka and fuck with geese',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Kunigunda',
            status: 'I am very busy',
            location: {city: 'Denmark', country: 'København'}
        },
        {id: 4, followed: false, fullName: 'John', status: 'Do it yourself', location: {city: 'Texas', country: 'USA'}},
        {id: 5, followed: true, fullName: 'Elena', status: 'Chill', location: {city: 'Male', country: 'Maldives'}}
    ]
}

export const usersReducer = (state: UsersInitialStateType, action: userReducerType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: [...state.users, action.users]}
        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users:any) => ({type:'SET-USERS',users})









