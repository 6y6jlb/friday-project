import {InferActionsType} from "./store";

//actions
export const actionsProfile = {}
//reducer
const recoveryPasswordReducer = (state = {}, action: RecoveryPasswordActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        default:
            return state
    }
}
export default recoveryPasswordReducer;
//types
export type RecoveryPasswordActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = any;
