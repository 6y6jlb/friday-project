import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import style from './Authorization.module.css'
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import {NavLink, Redirect} from "react-router-dom";
import {PATH, Routes} from "../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {actionsAuthorization, loginTC} from "../../../bll/authorization-reducer";
import {AppStateType} from "../../../bll/store";

export const Authorization: React.FC = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType,boolean>(state=>state.auth.isAuth)
    const error = useSelector<AppStateType,string|undefined>(state=>state.auth.error)

    const login=()=>{
        //dispatch(loginTC('nya-admin@nya.nya','1qazxcvBG')) //ignat login
        dispatch(loginTC(email,password))
    }
    const changePasswordInput=(e:ChangeEvent<HTMLInputElement>)=> {
        dispatch(actionsAuthorization.setError(undefined))
       setPassword(e.currentTarget.value)
    }
    const changeEmailInput=(e:ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.currentTarget.value)
        dispatch(actionsAuthorization.setError(undefined))
    }
    const onBlurCallback=()=>{
        if (error) {
            dispatch ( actionsAuthorization.setError ( undefined ) )
        }
    }

    if (isAuth) return <Redirect to={PATH.PROFILE}/>

    return (
        <div  className={style.authContainer}>
            <div className={ style.titleFrame }><h1>it-incubator</h1>
                <h2>sign in</h2></div>
            <div className={ style.inputsFrame }>
                <SuperInputText error={error} value={email} onChange={changeEmailInput} placeholder={ 'login' }/>
                <SuperInputText error={error} value={password} onChange={changePasswordInput} placeholder={ 'password' }/>
                <SuperButton disabled={!!error} red={!!error} onClick={login}>login</SuperButton>
            </div>
            <div className={ style.forgotPasFrame }>
                <NavLink to={PATH.PASSWORD_RECOVERY} className={ style.forgotPasButton }>forgot password?</NavLink>
            </div>

            <div className={ style.signUpFrame }>
                <span>Don’t have an account?</span>
                <SuperButton><NavLink to={PATH.REGISTRATION}>sign up</NavLink></SuperButton>
            </div>

        </div>
    )
}
