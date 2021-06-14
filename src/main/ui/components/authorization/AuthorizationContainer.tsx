import React, {ChangeEvent, useState} from "react";
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {actionsAuthorization, loginTC} from "../../../bll/authorization-reducer";
import {AppStateType} from "../../../bll/store";
import {Authorization} from "./Authorization";

export const AuthorizationContainer: React.FC = React.memo((props) => {
    const [email, setEmail] = useState ( 'rend@re.re' )
    const [password, setPassword] = useState ( '12345678' )
    const dispatch = useDispatch ()
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )
    const loading = useSelector<AppStateType, boolean> ( state => state.auth.loading )
    const error = useSelector<AppStateType, string | undefined> ( state => state.auth.error )
    const login = () => {
        dispatch ( loginTC ( email, password ) )
    }
    const changePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch ( actionsAuthorization.setError ( undefined ) )
        setPassword ( e.currentTarget.value )
    }
    const changeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail ( e.currentTarget.value )
        dispatch ( actionsAuthorization.setError ( undefined ) )
    }
    const onBlurCallback = (value: string) => {
        if (error && value.trim ().length > 0) {
            dispatch ( actionsAuthorization.setError ( undefined ) )
        }
    }

    if (isAuth) return <Redirect to={ PATH.PROFILE }/>

    return <Authorization password={ password } error={ error } login={ login } loading={loading}
                          changePasswordInput={ changePasswordInput } changeEmailInput={ changeEmailInput }
                          email={ email } onBlurCallback={ onBlurCallback }/>
})

