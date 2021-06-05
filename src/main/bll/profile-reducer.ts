import {InferActionsType} from "./store";

//actions
export const actionsProfile = {
    setProfile:(model:ProfileResponseType | {})=>{
        return {
            type:'friday/profile/setProfile',
            payload:{model}
        }
    }

}

//state

const initialStateProfile = {
    profileEntity: {
        _id: null,
        email: null,
        name: null,
        avatar: null,
        publicCardPacksCount: null, // количество колод
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,// подтвердил ли почту
        rememberMe: null,
        error: null,
    } as ProfileResponseType
}
//reducer
const profileReducer = (state = initialStateProfile, action: ProfileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case "friday/profile/setProfile":
            return {...state,...action.payload.model}
        default:
            return state
    }
}
export default profileReducer;
//types
export type ProfileActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = typeof initialStateProfile;
export type ProfileResponseType = {
    _id: string | null
    email: string | null
    name: string | null
    avatar?: string | null
    publicCardPacksCount: number | null // количество колод
    created: Date | null
    updated: Date | null
    isAdmin: boolean | null
    verified: boolean | null;// подтвердил ли почту
    rememberMe: boolean | null
    error?: string | null
}
