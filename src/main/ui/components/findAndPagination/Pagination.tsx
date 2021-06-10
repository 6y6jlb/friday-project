import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {actionsFindAndPagination, getPacksTC} from "../../../bll/find-and-pagination-reducer";

export const Pagination: React.FC = (props) => {
        const dispatch = useDispatch ()
        const pagesTotalCount = useSelector<AppStateType, number> ( state => state.findAndPagination.pagesTotalCount )
        const pagesCount = useSelector<AppStateType, number> ( state => state.findAndPagination.pagesCount )


        const buttonsCounter: number[] = []
        for (let i = 0; i < Math.ceil ( pagesTotalCount / pagesCount ); i++) {
            buttonsCounter.push ( i + 1 )
        }

        const changePage = (page:number)=>{
            dispatch ( actionsFindAndPagination.setPageNumber ( page ) )
            dispatch(getPacksTC())
        }

        const buttons = buttonsCounter.map ( (bN) => {
            return <button onClick={(event)=>{
                changePage(bN)} }>{ bN }</button>
        } )


        return <div>
            <label>Pagination</label>
            <select value={ pagesCount } onChange={ event => {
                dispatch ( actionsFindAndPagination.setPageCounter ( Number ( event.currentTarget.value ) ) )
                dispatch(getPacksTC())} }>
                <option value={ 4 }>4</option>
                <option value={ 7 }>7</option>
                <option value={ 10 }> 10</option>
                <option value={ 20 }>20</option>
            </select>
            { buttons }
        </div>
    }
;
