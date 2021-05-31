import { AppThunk, InferActionsType } from "./store";
import { authApi } from "../dal/authAPI";
import { actionsAuthorization } from "./authorization-reducer";

const initialState = {

}

//actions
export const actionsPasswordRecovery = {
	forgotPassword : ( email : string ) => {
		return {
			type : 'friday/passwordRecovery/forgot',
			payload : { email }
		} as const
	},
}
//reducer
const recoveryPasswordReducer = ( state = {}, action : RecoveryPasswordActionsTypes ) : InitialStateProfileType => {
	switch (action.type) {

		default:
			return state
	}
}
export default recoveryPasswordReducer;
//types
export type RecoveryPasswordActionsTypes = InferActionsType<typeof actionsPasswordRecovery>;
export type InitialStateProfileType = any;

//thunk
export const recoveryPasswordTC = ( email : string ) : AppThunk => async dispatch => {
	try {
		const response = await authApi.forgot ( email )
	} catch (e) {
		const error = e.response
			? e.response.data.error
			: (e.message + ', more details in the console');
		dispatch ( actionsAuthorization.setError ( error ) )
	}
}