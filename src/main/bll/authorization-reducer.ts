import {InferActionsType} from "./store";

//actions
export const actionsProfile = {}
//reducer
const authReducer = (state = {}, action: AuthActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        default:
            return state
    }
}
export default authReducer;
//types
export type AuthActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = any;
