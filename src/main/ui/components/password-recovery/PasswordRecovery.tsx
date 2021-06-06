import React, {ChangeEvent, useState} from "react";
import style from "./PasswordRecovery.module.css";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import {recoveryPasswordTC} from "../../../bll/recovery-password-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const PasswordRecovery = () => {
	const dispatch = useDispatch ();
	const [email, setEmail] = useState<string> ( '' );
	const answer = useSelector<AppStateType,string>(state=>state.recoveryPassword.answer)
	const error = useSelector<AppStateType,string|undefined>(state=>state.auth.error)
	const changeInput = ( e : ChangeEvent<HTMLInputElement> ) => {
		setEmail ( e.currentTarget.value )
	}
	return (
		<div className={ style.forgotContainer }>
			<div className={ style.titleFrame }><h1>it-incubator</h1>
				<h2>Forgot your password?</h2></div>
			<div className={ style.inputFrame }>
				<SuperInputText value={ email } onChange={ changeInput } placeholder={'e-mail' }/>
				{answer&&<p>{answer}</p>}
				{/*{error&&<p>{error}</p>}*/}
				<p>Enter your email address and we will send you further instructions</p>
				<SuperButton onClick={ () => dispatch ( recoveryPasswordTC ( email ) ) }>send help</SuperButton>
			</div>
			<div className={ style.signUpFrame }>
				<span>Did you remember your password?</span>
				<SuperButton><NavLink to={ PATH.AUTHORIZATION }>try login in</NavLink></SuperButton>
			</div>
		</div>
	)
}

/* <div className={ style.titleFrame }><h1>it-incubator</h1>
                <h2>sign in</h2></div>
            <div className={ style.inputsFrame }>
                <SuperInputText onBlur={ () => onBlurCallback ( email ) } error={ error } value={ email }
                                onChange={ changeEmailInput } placeholder={ 'login' }/>
                <SuperInputText onBlur={ () => onBlurCallback ( password ) } error={ error } value={ password }
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
*/


