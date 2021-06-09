import {AppThunk, InferActionsType} from "./store";
import {AuthAPI} from "../dal/authAPI";
import {meTC} from "./authorization-reducer";

//actions
export const actionsProfile = {
    setProfile:(model:ProfileResponseType) => {
        return {type:'friday/profile/setProfile', payload:{model}
        } as const
    },

}

//Thunk
export const updateName = (name: string | null): AppThunk => async (dispatch) => {
    try {
        await AuthAPI.updateName(name)
        dispatch(meTC())
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
    }
}
export const updateAvatar = (avatar: string): AppThunk => async (dispatch) => {
    try {
        await AuthAPI.updateAvatar( avatar)
        dispatch(meTC())
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
    }
}
//state

const initialStateProfile = {
    profileEntity: null as ProfileResponseType | null ,

}

//reducer
const profileReducer = (state:InitialStateProfileType = initialStateProfile, action: ProfileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case "friday/profile/setProfile":
            return {...state,  profileEntity: action.payload.model}
        default:
            return state
    }
}
export default profileReducer;

//types
export type ProfileActionsTypes = InferActionsType<typeof actionsProfile>
export type InitialStateProfileType = typeof initialStateProfile;
export type ProfileResponseType = null | {
        _id: string
        email: string
        name: string
        avatar?: string
        publicCardPacksCount: number
        created: Date
        updated: Date
        isAdmin: boolean
        verified: boolean
        rememberMe: boolean
        error?: string
}
