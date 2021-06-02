import { AppThunk, InferActionsType } from "./store";
import { authApi } from "../dal/authAPI";
import { actionsAuthorization } from "./authorization-reducer";

const initialState = {
answer:''
}

//actions
export const actionsPasswordRecovery = {
	setAnswer : ( answer : string ) => {
		return {
			type : 'friday/passwordRecovery/setAnswer',
			payload : { answer }
		} as const
	},
}
//reducer
const recoveryPasswordReducer = ( state = initialState, action : RecoveryPasswordActionsTypes ) : InitialStateProfileType => {
	switch (action.type) {
		case "friday/passwordRecovery/setAnswer":
			return {...state,...action.payload}

		default:
			return state
	}
}
export default recoveryPasswordReducer;

//thunk
export const recoveryPasswordTC = ( email : string ) : AppThunk => async dispatch => {
	try {
		const response = await authApi.forgot ( email )
		dispatch ( actionsPasswordRecovery.setAnswer(response.data.toString()) )
	} catch (e) {
		const error = e.response
			? e.response.data.error
			: (e.message + ', more details in the console');
		dispatch ( actionsAuthorization.setError ( error ) )
	}
}


//types
export type RecoveryPasswordActionsTypes = InferActionsType<typeof actionsPasswordRecovery>;
export type InitialStateProfileType = typeof initialState;



