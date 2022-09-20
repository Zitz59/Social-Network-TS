import { getAuthUserData} from './auth-reducer';
import { AppThunk} from './redux-store';

export type AppReducerACType = ReturnType<typeof initializedSuccess>

export type AppInitialStateType = {
    initialized: boolean
}

let initialState: AppInitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState,
                           action: AppReducerACType): AppInitialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: 'INITIALIZED-SUCCESS',
} as const)

export const initializeApp = ():AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        promise.then(()=>{
            dispatch(initializedSuccess())
        })
    }
}