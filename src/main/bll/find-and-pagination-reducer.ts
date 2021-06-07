import {AppThunk, InferActionsType} from "./store";
import {TableAPI} from "../dal/tableAPI";
import {actionsTable} from "./table-reducer";


//reducer
const initialState = {
    searchValue: "",
    page: 1,
    pagesCount: 10,
    pagesTotalCount: 10

}

export const findAndPaginationReducer = (state = initialState, action: FindAndPaginationActionsType): InitialStateType => {
    switch (action.type) {
        case "friday/findAndPagination/search_value":
            //console.log(action.searchValue);
            return {...state, searchValue: action.payload.searchValue};
        case "friday/findAndPagination/setPageCounter":{
            return {...state,pagesCount: action.payload.pageCount}
        }
        default:
            return state;
    }
};

//actions
export const actionsFindAndPagination = {
    setSearchValueAC: (searchValue: string) => {
        return {
            type: "friday/findAndPagination/search_value",
            payload: {searchValue},
        } as const
    },
    setPageCounter: (pageCount: number) => {
        return {
            type: "friday/findAndPagination/setPageCounter",
            payload: {pageCount},
        } as const
    }


}


//thunk
export const getPacksTC = (...options: any): AppThunk => async (dispatch, getState) => {
    const {page, pagesCount, searchValue} = getState ().findAndPagination
    try {
        const response = await TableAPI.getPacks ( searchValue, 1, 10000, null, page, pagesCount )
        dispatch ( actionsTable.setPacks ( response.data.cardPacks ) )

    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');

    }
}



//types
export type FindAndPaginationActionsType = InferActionsType<typeof actionsFindAndPagination>;
export type InitialStateType = typeof initialState;
