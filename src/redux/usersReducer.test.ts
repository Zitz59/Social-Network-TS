import {followAC, UsersInitialStateType, usersReducer} from './usersReducer';

test('correct user should be followed', () => {

    const startState: UsersInitialStateType = {
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
            {
                id: 4,
                followed: false,
                fullName: 'John',
                status: 'Do it yourself',
                location: {city: 'Texas', country: 'USA'}
            },
            {
                id: 5,
                followed: true,
                fullName: 'Elena',
                status: 'Chill',
                location: {city: 'Male', country: 'Maldives'}
            }
        ]
    }
    const action = followAC(2)

    const endState = usersReducer(startState, action)

    expect(endState['users'][0].followed).toBe(true)
    expect(endState['users'][1].followed).toBe(true)
    expect(endState['users'][3].followed).toBe(false)

})

test('correct user should be unfollowed', () => {

    const startState: UsersInitialStateType = {
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
            {
                id: 4,
                followed: false,
                fullName: 'John',
                status: 'Do it yourself',
                location: {city: 'Texas', country: 'USA'}
            },
            {
                id: 5,
                followed: true,
                fullName: 'Elena',
                status: 'Chill',
                location: {city: 'Male', country: 'Maldives'}
            }
        ]
    }
    const action = followAC(2)

    const endState = usersReducer(startState, action)

    expect(endState['users'][0].followed).toBe(false)
    expect(endState['users'][1].followed).toBe(true)
    expect(endState['users'][3].followed).toBe(false)

})







