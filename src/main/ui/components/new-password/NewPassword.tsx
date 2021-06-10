import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const NewPassword:React.FC= (props)=>{
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )

    if (isAuth)  return <Redirect to={PATH.PROFILE}/>;

    return <h1>NewPassword</h1>
}
