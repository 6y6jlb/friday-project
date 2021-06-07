import React from "react";
import style from './Table.module.css';
import {Search} from "../../main/ui/components/findAndPagination/Search";
import {FilterPrice} from "../../main/ui/components/findAndPagination/FilterPrice";
import {Pagination} from "../../main/ui/components/findAndPagination/Pagination";
import Packs from "./Packs/Packs";
import {useSelector} from "react-redux";
import {AppStateType} from "../../main/bll/store";
import {PackResponseType} from "../../main/dal/tableAPI";

const Table: React.FC = () => {
    const packs = useSelector<AppStateType ,Array<PackResponseType>>(state=>state.table.packs)
    console.log (packs)


    return (
        <div className={ style.tableContainer }>
            <h1>cards list</h1>
            <Search/>
            <FilterPrice/>
            <Packs packs={packs}/>
            <Pagination/>

        </div>
    )
}
export default Table;