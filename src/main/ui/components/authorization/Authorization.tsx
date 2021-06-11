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
    login: (e: React.FormEvent) => void
    password: string
    email: string
    error: string | undefined
    loading: boolean
}
export const Authorization: React.FC<AuthPropsTypes> = React.memo ( (props) => {
    const {
        onBlurCallback, changeEmailInput, changePasswordInput, login, password, email, error
    } = props //деструктуризация
    const disable = (!!error) || email.length < 5 || password.length < 8
    if (props.loading) {
        return <Preloader/>
    }


    return (

        <div className={ style.authContainer }>
            <div className={ style.titleFrame }><h1>it-incubator</h1>
                <h2>sign in</h2></div>
            <form onSubmit={ login } className={ style.inputsFrame }>
                <div>
                    <p>test data</p>
                    <p>rend@re.re</p>
                    <p>12345678</p>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <SuperInputText  id={ 'email' } onBlur={ () => onBlurCallback ( email ) }
                                    error={ error }
                                    value={ email }
                                    onChange={ changeEmailInput } placeholder={ 'login' }/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <SuperInputText id={ 'password' } onBlur={ () => onBlurCallback ( password ) }
                                    error={ error }
                                    value={ password }
                                    onChange={ changePasswordInput } placeholder={ 'password' }/>
                </div>
                <SuperButton disabled={ disable } red={ disable }>login</SuperButton>
            </form>
            <div className={ style.forgotPasFrame }>
                <NavLink to={ PATH.PASSWORD_RECOVERY } className={ style.forgotPasButton }>forgot password?</NavLink>
            </div>

            <div className={ style.signUpFrame }>
                <span>Don’t have an account?</span>
                <SuperButton ><NavLink to={ PATH.REGISTRATION }>sign up</NavLink></SuperButton>
            </div>

        </div>
    )
} )