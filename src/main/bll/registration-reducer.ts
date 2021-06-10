import {Dispatch} from "redux";
import {AuthAPI} from "../dal/authAPI";

const REGISTERED = "REGISTERED";
const ERROR_FROM_REQUEST = "ERROR_FROM_REQUEST";

//state
export const initialStateRegistration = {
    registered: false,
    error: false
};


//reducer
export const registrationReducer = (
    state = {},
    action: RegistrationActionsTypes
): InitialStateProfileType => {
    switch (action.type) {
        case REGISTERED: {
            return {...state, registered: action.registered};}
        case ERROR_FROM_REQUEST: {
            return {...state, error: action.errorFromRequest};}
        default:
            return state;
    }
};

//actions
export const actionsRegistration = {
    registerUserAC:(registered: boolean) => ({
        type: REGISTERED,
        registered,
    }),
    errorFromRequestAC :(error: string) => ({
        type: ERROR_FROM_REQUEST,
        error: error,
    })
}
/*export const registerUserAC = (registered: boolean) => ({
    type: REGISTERED,
    registered,
});
export const errorFromRequestAC = (error: string) => ({
    type: ERROR_FROM_REQUEST,
    error: error,
});*/

//thunks
export const registerUserTC = (data: RegisterDataType) => (dispatch: Dispatch) => {
    AuthAPI.register(data).then(() => {
        try {
            dispatch(actionsRegistration.registerUserAC(true));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(actionsRegistration.errorFromRequestAC(error))
        }

    });
};

//types
// export type RegistrationActionsTypes = InferActionsType<typeof initialStateRegistration>;
export type RegisterDataType = {
    email: string;
    password: string;
};
export type RegistrationActionsTypes = any;
export type InitialStateProfileType = any;
