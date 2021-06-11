import {AppThunk, InferActionsType} from "./store";
import {AuthAPI} from "../dal/authAPI";
import {actionsProfile} from "./profile-reducer";

//state
const initialProfileState = {
    isAuth: false,
    error: undefined as string | undefined,
    loading:false,
    isInitialized:false
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
    },
    setLoading:(loading: boolean) => {
        return {type: "friday/auth/SET-PROFILE-LOADING", payload:{loading}
        } as const
    },
    setInitialized: (isInitialized:boolean)=>{
        return {type: "friday/auth/setInitialized", payload:{isInitialized}
            } as const
    },
};
//thunk
export const loginTC = (email: string, password: string, rememberMe = false): AppThunk => async dispatch => {
    dispatch ( actionsAuthorization.setLoading(true))
    try {
        const response = await AuthAPI.login ( email, password, rememberMe )
        dispatch ( actionsProfile.setProfile ( response.data ) )
        dispatch ( actionsAuthorization.setAuth ( true ) )

    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch ( actionsAuthorization.setError ( error ) )
        dispatch ( actionsAuthorization.setAuth ( false ) )
    } finally {
        dispatch ( actionsAuthorization.setLoading(false))
    }
}

export const logOutTC = (): AppThunk => async dispatch => {
    dispatch ( actionsAuthorization.setLoading(true))
    try {
        const response = AuthAPI.logOut ()
        dispatch ( actionsProfile.setProfile (null) )
        dispatch ( actionsAuthorization.setAuth ( false ) )
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch ( actionsAuthorization.setError ( error ) )
    }
    dispatch ( actionsAuthorization.setLoading(false))
}

export const  meTC = (): AppThunk => async dispatch => {
    dispatch ( actionsAuthorization.setLoading(true))
    try {
        const response = await AuthAPI.me ()

        if (response.data) {
            dispatch ( actionsAuthorization.setAuth (true) )
            dispatch ( actionsProfile.setProfile ( response.data ) )
        }
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch ( actionsAuthorization.setError ( error ) )
    } finally {
        dispatch(actionsAuthorization.setInitialized(true))
        dispatch ( actionsAuthorization.setLoading(false))
    }
}


/*export const initializeAppTC = ():AppThunk => (dispatch) => {
    authAPI.me ().then ( res => {
        if (res.data.resultCode === 0) {
            dispatch ( setIsLoggedInAC ( {isLoggedIn: true} ) );
        } else {
        }
    } ).finally ( () => {
        dispatch ( setInitializedAC ( {isInitialized:true} ) );
    } )
};*/


//reducer
const authReducer = (state = initialProfileState, action: AuthActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case "friday/auth/setAuthAC": //сетаем исАус
            return {...state, isAuth: action.payload.isAuth}
        case "friday/auth/setErrorAC": //сетаем еррор
            return {...state, error: action.payload.error}
        case "friday/auth/SET-PROFILE-LOADING":
            return {...state,  loading: action.payload.loading}
        case "friday/auth/setInitialized": {
            return {...state,isInitialized: action.payload.isInitialized}
        }
        default:
            return state
    }
}
export default authReducer;
//types
export type AuthActionsTypes = InferActionsType<typeof actionsAuthorization>;
export type InitialStateProfileType = typeof initialProfileState;
