import React, { useState } from "react";
import style from "../authorization/Authorization.module.css";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import { recoveryPasswordTC } from "../../../bll/recovery-password-reducer";
import { useDispatch } from "react-redux";

export const PasswordRecovery = () => {
	const dispatch = useDispatch ();
	const [email, setEmail] = useState<string> ( '' );
	const changeInput = ( e : any ) => {
		setEmail ( e.currentTarget.value )
	}
	return (
		<div className={ style.forgotContainer }>
			<h1>Forgot password</h1>
			<SuperInputText value={ email } onChange={ changeInput } placeholder={ 'e-mail' }/>
			<SuperButton onClick={ () => recoveryPasswordTC (email) }>submit</SuperButton>
		</div>
	)
}


