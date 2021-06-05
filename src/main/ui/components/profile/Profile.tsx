import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ProfileResponseType} from "../../../bll/profile-reducer";
import style from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const Profile: React.FC = (props) => {
    const profile = useSelector<AppStateType, ProfileResponseType> ( state => state.profile.profileEntity )
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )

    if (!isAuth) return <Redirect to={ PATH.AUTHORIZATION }/>
    return (
        <div className={style.profileContainer}>
                <img className={style.image} src={profile.avatar||"http://placehold.it/300x300"} />
                <h1>{profile.name || profile.email || 'челавечка'}</h1>
        </div>
    )

}
