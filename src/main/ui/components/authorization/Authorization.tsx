import React from "react";
import style from './Authorization.module.css'
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";

export const Authorization: React.FC = (props) => {
    return (
        <div className={style.authContainer}>
            <div className={ style.titleFrame }><h1>it-incubator</h1>
                <h2>sign in</h2></div>
            <div className={ style.inputsFrame }>
                <SuperInputText placeholder={ 'login' }></SuperInputText>
                <SuperInputText placeholder={ 'password' }></SuperInputText>
                <SuperButton>login</SuperButton>
            </div>
            <div className={ style.forgotPasFrame }>
                <span className={ style.forgotPasButton }>forgot password?</span>
            </div>

            <div className={ style.signUpFrame }>
                <span>Don’t have an account?</span>
                <SuperButton>sign up</SuperButton>
            </div>

        </div>
    )
}
