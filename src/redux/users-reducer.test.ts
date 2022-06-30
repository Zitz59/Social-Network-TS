import {followAC, unFollowAC, UsersInitialStateType, usersReducer} from './users-reducer';

let startState: UsersInitialStateType

beforeEach(() => {
    startState = {
        users: [
            {
                id: 1,
                photos: {small: 'Eltsyn_face.png'},
                followed: true,
                name: 'Sohan',
                status: 'Learn react !!!',
                location: {city: 'Tel-a-Viv', country: 'Israel'}
            },
            {
                id: 2,
                photos: {small: 'Eltsyn_face.png'},
                followed: false,
                name: 'Ivan',
                status: 'Drinking vodka and fuck with geese',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photos: {small: 'Eltsyn_face.png'},
                followed: true,
                name: 'Kunigunda',
                status: 'I am very busy',
                location: {city: 'Denmark', country: 'København'}
            },
            {
                id: 4,
                photos: {small: 'Eltsyn_face.png'},
                followed: false,
                name: 'John',
                status: 'Do it yourself',
                location: {city: 'Texas', country: 'USA'}
            },
            {
                id: 5,
                photos: {small: 'Eltsyn_face.png'},
                followed: true,
                name: 'Elena',
                status: 'Chill',
                location: {city: 'Male', country: 'Maldives'}
            }
        ]
    }
})


test('correct user should be followed', () => {

    const action = followAC(2)

    const endState = usersReducer(startState, action)

    expect(endState['users'][0].followed).toBe(true)
    expect(endState['users'][1].followed).toBe(true)
    expect(endState['users'][3].followed).toBe(false)

})

test('correct user should be unfollowed', () => {

    const action = unFollowAC(3)

    const endState = usersReducer(startState, action)

    expect(endState['users'][0].followed).toBe(true)
    expect(endState['users'][1].followed).toBe(false)
    expect(endState['users'][3].followed).toBe(false)

})