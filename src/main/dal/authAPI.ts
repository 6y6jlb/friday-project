import {instance} from "./instatnce";
import {ProfileResponseType} from "../bll/profile-reducer";

export const authApi = {
    pingGet: () => {
        return instance.get ( 'ping/' )
    },
    pingPost: () => {
        return instance.post ( 'ping/', {frontTime: Date.now ()} )
    },
    me: () => {
        return instance.post ( 'auth/me', {} )
    },
    login: (email: string, password: string, rememberMe:boolean) => {
        const model = {
            email, password, rememberMe
        }
        return instance.post<ProfileResponseType>( 'auth/login/', model )
    },
    logOut: () => {
        return instance.delete ( 'auth/me/', {} )
    }
}