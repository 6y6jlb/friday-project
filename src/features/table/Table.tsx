import React from "react";
import style from './Table.module.css';
import SuperButton from "../../main/ui/common/components/SuperButton/SuperButton";
import FindAndPagination from "../../main/ui/components/findAndPagination/FindAndPagination";

const Table: React.FC = () => {
    return (
        <div className={ style.tableContainer }>
            <header>
                <h1>cards list</h1>
                <input type="text"/>
                <SuperButton value={ 'search' }>search</SuperButton>
            </header>
            <div className={ style.cardsContainer }>
                <FindAndPagination/>
            </div>

        </div>
    )
}
export default Table;