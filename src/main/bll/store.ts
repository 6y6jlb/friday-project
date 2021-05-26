import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import {AuthActionsTypes} from "./authorization-reducer";
import {RecoveryPasswordActionsTypes} from "./recovery-password-reducer";
import {NewPasswordActionsTypes} from "./new-password-reducer";


export type ActionsTypes =
    | ProfileActionsTypes
    | AuthActionsTypes
    | RecoveryPasswordActionsTypes
    | NewPasswordActionsTypes


const rootReducer = combineReducers ( {
    profile: profileReducer,
} );

//common state type
export type AppStateType = ReturnType<typeof rootReducer>

//thunk generic type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>


//properties generic type for thunk
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

//generic actions type
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


//enhancers with dev-tools
const composeEnhancers = typeof window === 'object' && //@ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ( {} ) : compose;

const enhancer = composeEnhancers (
    applyMiddleware ( thunkMiddleware ),
);
export const store = createStore ( rootReducer, enhancer );

//@ts-ignore
window.store = store

export default store;
