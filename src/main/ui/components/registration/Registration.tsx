import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {registerUserAC, registerUserTC} from "../../../bll/registration-reducer";
import {AppStateType} from "../../../bll/store";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import styles from "./Registration.module.css";

export const Registration: React.FC = (props) => {
    const [userName, setuserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");
    const errorFromServer = useSelector<AppStateType, string>(state => state.registration.error)


    const registered = useSelector<AppStateType, boolean>(
        (state) => state.registration.registered
    );

    const dispatch = useDispatch();

    const onChangeUsername = (e: string) => {
        setuserName(e);
    };
    const onChangePassword = (e: string) => {
        setPassword(e);
    };
    const onChangePasswordConfirm = (e: string) => {
        setPasswordConfirm(e);
    };
    const onClickSubmitData = () => {
        if (password !== passwordConfirm) {
            setError("Passwords should be same");
        } else if (!password || !passwordConfirm) {
            setError("Passwords should not be empty");
        } else {
            dispatch(registerUserTC({email: userName, password}));
        }
    };
    useEffect(() => {
        return () => {
            dispatch(registerUserAC(false));
        };
    }, []);
    if (registered) {
        return <Redirect to={"/authorization"}/>;
    }
    return (
        <div className={styles.registrationWrapper}>
            <div className={styles.inputWrapper}>
                Username:
                <SuperInputText value={userName} onChangeText={onChangeUsername}/>
            </div>
            <div className={styles.inputWrapper}>
                Password:
                <SuperInputText
                    type={"password"}
                    error={errorFromServer || error}
                    value={password}
                    onChangeText={onChangePassword}
                />
            </div>
            <div className={styles.inputWrapper}>
                Confirm Password:
                <SuperInputText
                    type={"password"}
                    error={errorFromServer || error}
                    value={passwordConfirm}
                    onChangeText={onChangePasswordConfirm}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <SuperButton onClick={onClickSubmitData}>Sign Up</SuperButton>
            </div>
            <div>
                <Link to={"/authorization"}>Login</Link>
            </div>
        </div>
    );
};
