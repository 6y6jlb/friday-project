import {InferActionsType} from "./store";

//actions
export const actionsProfile = {}
//reducer
const registrationReducer = (state = {}, action: RegistrationActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        default:
            return state
    }
}
export default registrationReducer;
//types
export type RegistrationActionsTypes = InferActionsType<typeof actionsProfile>;
export type InitialStateProfileType = any;
