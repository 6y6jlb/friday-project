import { Dispatch } from "redux";
import { InferActionsType } from "./store";

const REGISTERED = "REGISTERED";

//actions
export const actionsProfile = {
  registered: false,
};
//reducer
export const registrationReducer = (
  state = {},
  action: RegistrationActionsTypes
): InitialStateProfileType => {
  switch (action.type) {
    case REGISTERED: {
      return { ...state, registered: action.registered };
    }
    default:
      return state;
  }
};
//actions
export const registerUserAC = (registered: boolean) => ({
  type: REGISTERED,
  registered,
});

//thunks
export const registerUserTC = (data: RegisterData) => (dispatch: Dispatch) => {
  //   AUTH.register().register(data).then(() => {
  //     dispatch(registerUserAC(true));
  //   });
};

//types
// export type RegistrationActionsTypes = InferActionsType<typeof actionsProfile>;
export type RegisterData = {
  email: string;
  password: string;
};
export type RegistrationActionsTypes = any;
export type InitialStateProfileType = any;
