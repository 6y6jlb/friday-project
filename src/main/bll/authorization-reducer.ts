import {AppThunk, InferActionsType} from "./store";
import {API} from "../dal/API";
import {actionsProfile} from "./profile-reducer";

//state
const initialProfileState = {
    isAuth: false,
    error: undefined as string | undefined
}

//reducer
export const authReducer = (state = initialProfileState, action: AuthActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case "friday/auth/setAuthAC":
            return {...state, ...action.payload}
        //сетаем исАус
        case "friday/auth/setErrorAC": //сетаем еррор
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
export const actionsAuthorization = {
    setAuth: (isAuth: boolean) => {
        return {
            type: 'friday/auth/setAuthAC',
            payload: {isAuth}
        } as const
    },
    setError: (error: string | undefined) => {
        return {
            type: 'friday/auth/setErrorAC',
            payload: {error}
        } as const
    }
}

//thunk
export const loginTC = (email: string, password: string, rememberMe = false): AppThunk => async dispatch => {
    try {
        const response = await API.login(email, password, rememberMe)
        dispatch(actionsProfile.setProfile(response.data))
        dispatch(actionsAuthorization.setAuth(true))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(actionsAuthorization.setError(error))
    }
}

//types
export type AuthActionsTypes = InferActionsType<typeof actionsAuthorization>;
export type InitialStateProfileType = typeof initialProfileState;
