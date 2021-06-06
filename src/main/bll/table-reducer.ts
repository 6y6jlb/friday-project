import {AppThunk, InferActionsType} from "./store";
import {AuthAPI} from "../dal/authAPI";
import {actionsProfile} from "./profile-reducer";
import {TableAPI} from "../dal/tableAPI";

//state
const initialProfileState = {


}


//actions
export const actionsTable = {

}
//thunk
export const getCardsTC = (...options:any):AppThunk=>async dispatch=>{
   try {
const response = await TableAPI.getCards('test',2,4,null,1,2)
       console.log (response.data)

   } catch (e) {
       const error = e.response
           ? e.response.data.error
           : (e.message + ', more details in the console');

       }
}

//reducer
const tableReducer = (state = initialProfileState, action: TableActionsTypes): InitialStateTableType => {
    switch (action.type) {

        default:
            return state
    }
}
export default tableReducer;
//types
export type TableActionsTypes = InferActionsType<typeof actionsTable>;
export type InitialStateTableType = typeof initialProfileState;
