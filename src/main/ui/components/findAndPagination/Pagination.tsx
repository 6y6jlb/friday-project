import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {actionsFindAndPagination} from "../../../bll/find-and-pagination-reducer";

export const Pagination: React.FC = (props) => {
        const dispatch = useDispatch ()
        const pagesTotalCount = useSelector<AppStateType, number> ( state => state.findAndPagination.pagesTotalCount )
        const pagesCount = useSelector<AppStateType, number> ( state => state.findAndPagination.pagesCount )


        const buttonsCounter: number[] = []
        for (let i = 0; i < Math.ceil ( pagesTotalCount / pagesCount ); i++) {
            buttonsCounter.push ( i + 1 )
        }


        const buttons = buttonsCounter.map ( (b) => {
            return <button>{ b }</button>
        } )

        const setPageCounter = () => {
            //event.currentTarget.value
        }

        return <div>
            <label>Pagination</label>
            <select value={ pagesCount } onChange={ event => {
                dispatch ( actionsFindAndPagination.setPageCounter ( Number ( event.currentTarget.value ) ) )
            }
            }>
                <option value={ 4 }>4</option>
                <option value={ 7 }>7</option>
                <option value={ 10 }> 10</option>
                <option value={ 20 }>20</option>
            </select>
            { buttons }
        </div>
    }
;
