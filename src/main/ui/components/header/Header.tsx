import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";
import style from './Header.module.css'

export const Header: React.FC = (props) => {
    return (
        <div className={style.headerFrame}>
            <NavLink to={PATH.TEST}>test</NavLink>
            <NavLink to={PATH.PROFILE}>profile</NavLink>
            <NavLink to={PATH.AUTHORIZATION}>auth</NavLink>
            <NavLink to={PATH.REGISTRATION}>register</NavLink>
            <NavLink to={PATH.ERROR_404}>error</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>pass new</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY}>pass recovery</NavLink>
            <NavLink to={PATH.TABLE}>table</NavLink>

        </div>)
}
