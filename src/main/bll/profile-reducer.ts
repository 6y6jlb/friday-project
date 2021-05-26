import {InferActionsType} from "./store";

//actions
export const actionsProfile = {}
//reducer
const profileReducer = (state = {}, action: ProfileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        default:
            return state
    }
}
export default profileReducer;
//types
export type ProfileActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = any;
