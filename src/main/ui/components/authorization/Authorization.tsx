import React, {ChangeEvent} from "react";
import style from "./Authorization.module.css";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {Preloader} from "../../common/components/Preloader/Preloader";


type AuthPropsTypes = {
    onBlurCallback: (value: string) => void
    changeEmailInput: (e: ChangeEvent<HTMLInputElement>) => void
    changePasswordInput: (e: ChangeEvent<HTMLInputElement>) => void
    login: () => void
    password: string
    email: string
    error: string | undefined
    loading: boolean
}
export const Authorization: React.FC<AuthPropsTypes> = React.memo((props) => {
    const {
        onBlurCallback, changeEmailInput, changePasswordInput, login, password, email, error
    } = props //деструктуризация

    if(props.loading) {
        return <div style={{margin:'80px 0 0 40px'}}><Preloader/></div>
    }

    return (

                <div className={ style.authContainer }>
            <div className={ style.titleFrame }><h1>it-incubator</h1>
                <h2>sign in</h2></div>
            <div className={ style.inputsFrame }>
                <SuperInputText onBlur={ () => onBlurCallback ( email ) }
                                error={ error }
                                value={ email }
                                onChange={ changeEmailInput } placeholder={ 'login' }/>
                <SuperInputText onBlur={ () => onBlurCallback ( password ) }
                                error={ error }
                                value={ password }
                                onChange={ changePasswordInput } placeholder={ 'password' }/>
                <SuperButton disabled={ !!error } red={ !!error } onClick={ login }>login</SuperButton>
            </div>
            <div className={ style.forgotPasFrame }>
                <NavLink to={ PATH.PASSWORD_RECOVERY } className={ style.forgotPasButton }>forgot password?</NavLink>
            </div>

            <div className={ style.signUpFrame }>
                <span>Don’t have an account?</span>
                <SuperButton><NavLink to={ PATH.REGISTRATION }>sign up</NavLink></SuperButton>
            </div>

        </div>
    )
})