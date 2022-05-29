export type SidebarType = {
    id: number
    name: string
    avatar: string
}

type InitialStateType = typeof initialState

let initialState =
    [{
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
            name: 'Maria',
            avatar: 'https://media.istockphoto.com/vectors/cartoon-young-girl-face-vector-illustration-of-beautiful-woman-avatar-vector-id923639308?b=1&k=20&m=923639308&s=170667a&w=0&h=dNz54KGP6e7MSDib2X6eGkbw4g-JLSdQaBp3pleK88M='
        }] as Array<SidebarType>


export const sidebarReducer = (state = initialState):InitialStateType => {

    return state
}

export default sidebarReducer;