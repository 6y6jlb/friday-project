import React, {ChangeEvent} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {actionsFindAndPagination, getPacksTC} from "../../../bll/find-and-pagination-reducer";


export function Search() {
    const searchValue = useSelector<RootStateOrAny, string> (
        (state) => state.findAndPagination.searchValue
    );
    const dispatch = useDispatch ();
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch ( actionsFindAndPagination.setSearchValueAC ( e.currentTarget.value ) );
    };
    const searchPacks = () => {
        dispatch ( getPacksTC () )
    }

    return (
        <div>
            <input value={ searchValue } onChange={ onChangeHandler } type="text"/>
            <button onClick={ searchPacks }>Search</button>
        </div>
    );
}
