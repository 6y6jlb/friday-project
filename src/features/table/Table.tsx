import React, {useState} from "react";
import style from './Table.module.css';
import {Search} from "../../main/ui/components/findAndPagination/Search";
import {FilterPrice} from "../../main/ui/components/findAndPagination/FilterPrice";
import {Pagination} from "../../main/ui/components/findAndPagination/Pagination";
import Packs from "./Packs/Packs";
import {useSelector} from "react-redux";
import {AppStateType} from "../../main/bll/store";
import {PackResponseType} from "../../main/dal/tableAPI";
import {Redirect} from "react-router-dom";
import {PATH} from "../../main/ui/components/routes/Routes";

const Table: React.FC = () => {
    const packs = useSelector<AppStateType ,Array<PackResponseType>>(state=>state.table.packs)
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )


if (!isAuth)  return <Redirect to={PATH.AUTHORIZATION}/>;
    return (
        <div className={ style.tableContainer }>
            <h1>cards list</h1>
            <Search/>
            <Packs packs={packs}/>
            <Pagination/>

        </div>
    )
}
export default Table;