import React from "react";
import { Route, Switch } from "react-router-dom";
import {Profile} from "../profile/Profile";
import {NewPassword} from "../new-password/NewPassword";
import {PasswordRecovery} from "../password-recovery/PasswordRecovery";
import {Registration} from "../registration/Registration";
import {Error_404} from "../error-pages/404-error/Error_404";
import {AuthorizationContainer} from "../authorization/AuthorizationContainer";
import {TestComponents} from "../../../../features/test-components/TestComponents";
import FindAndPagination from "../findAndPagination/FindAndPagination";
import Table from "../../../../features/table/Table";
import ModalContainer from "../../../../features/modals/ModalContainer";
import ModalsPage from "../../../../features/modals/ModalsPage";


export const PATH = {
    PROFILE: '/',//PROFILE
    NEW_PASSWORD: '/new_password',
    PASSWORD_RECOVERY: '/password_recovery',
    REGISTRATION: '/registration',
    AUTHORIZATION: '/authorization',
    ERROR_404: '/error/404',
    TEST: '/test',
    SEARCH_TEST:"/search",
    TABLE:'/table',
    MODAL:'/modal',

}
export const Routes:React.FC=()=>{
    return (
        <div>
            <Switch>
                <Route exact path={PATH.PROFILE} render={()=><Profile/>}/>
                <Route path={PATH.NEW_PASSWORD} render={()=><NewPassword/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={()=><PasswordRecovery/>}/>
                <Route path={PATH.REGISTRATION} render={()=><Registration/>}/>
                <Route path={PATH.AUTHORIZATION} render={()=><AuthorizationContainer/>}/>
                <Route path={PATH.TEST} render={()=><TestComponents/>}/>
                <Route path={PATH.SEARCH_TEST} render={()=><FindAndPagination/>}/>
                <Route path={PATH.TABLE} render={()=><Table/>}/>
                <Route path={PATH.MODAL} render={()=><ModalsPage/>}/>
                <Route render={()=><Error_404/>}/>
            </Switch>
        </div>
    )
}