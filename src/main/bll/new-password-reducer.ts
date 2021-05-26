import {InferActionsType} from "./store";

//actions
export const actionsProfile = {}
//reducer
const newPasswordReducer = (state = {}, action: NewPasswordActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        default:
            return state
    }
}
export default newPasswordReducer;
//types
export type NewPasswordActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = any;
