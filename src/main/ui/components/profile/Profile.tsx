import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ProfileResponseType} from "../../../bll/profile-reducer";
import style from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import {logOutTC} from "../../../bll/authorization-reducer";
import {getPacksTC} from "../../../bll/find-and-pagination-reducer";

export const Profile: React.FC = (props) => {
    const dispatch = useDispatch ()
    const profile = useSelector<AppStateType, ProfileResponseType> ( state => state.profile.profileEntity )
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )
    useEffect ( () => {
        dispatch ( getPacksTC () )
    }, [] )

    const logout = () => {
        dispatch ( logOutTC () )
    };
    if (!isAuth) return <Redirect to={ PATH.AUTHORIZATION }/>


    return (
        <div className={ style.profileContainer }>
            <SuperButton value={ 'logout' } onClick={ logout }>logOut</SuperButton>
            <img className={ style.image } src={ profile.avatar || "http://placehold.it/300x300" }/>
            <h1>{ profile.name || profile.email || 'челавечка' }</h1>

        </div>
    )

}
