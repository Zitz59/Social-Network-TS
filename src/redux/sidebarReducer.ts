export type SidebarType = {
    id: number
    name: string
    avatar: string
}

type InitialStateType = typeof initialState

let initialState =
    [{
        id: 1,
        name: 'Blind Joe',
        avatar: 'https://media.istockphoto.com/videos/portrait-of-highland-straight-fluffy-cat-with-long-hair-and-round-in-video-id1161210058?b=1&k=20&m=1161210058&s=640x640&h=6xaspkyiUJFWYmjGCPaA8D5G2eHyf6r2qVcKv4KHJGc='
    },
        {
            id: 2,
            name: 'Ions',
            avatar: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2019/02/shutterstock_161064191.jpg?quality=82&strip=1&resize=640%2C360'
        },
        {
            id: 3,
            name: 'Philosopher',
            avatar: 'https://wl-brightside.cf.tsp.li/resize/728x/jpg/e54/e78/30a24451a8ba30d37a3dfa888c.jpg'
        },
        {
            id: 4,
            name: 'Чмоня',
            avatar: 'https://social-network.samuraijs.com/activecontent/images/users/25030/user.jpg?v=0'

        }
    ] as Array<SidebarType>

//https://social-network.samuraijs.com/activecontent/images/users/25030/user.jpg?v=0
export const sidebarReducer = (state = initialState): InitialStateType => {

    return state
}

export default sidebarReducer;