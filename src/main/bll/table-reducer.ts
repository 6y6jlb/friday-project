import {AppThunk, InferActionsType} from "./store";
import {PackResponseType, TableAPI} from "../dal/tableAPI";
import {actionsFindAndPagination, getPacksTC} from "./find-and-pagination-reducer";

//state
const initialProfileState = {
    newPackItem: {name: '', price: null as number | null},
    packs: [
        {
            _id: "60be45b847a0990004f87488",
            user_id: "60917bf2420e3a0004514b4b",
            user_name: "NK",
            private: false,
            name: "test",
            path: "/def",
            grade: 0,
            shots: 0,
            cardsCount: 2,
            type: "pack",
            rating: 0,
            created: "2021-06-07T16:13:44.322Z",
            updated: "2021-06-07T16:14:37.816Z",
            more_id: "60917bf2420e3a0004514b4b",
            __v: 0
        },
        {
            _id: "60be42c147a0990004f87484",
            user_id: "6093cdb0d204d400042b77d9",
            user_name: "olkaaamartynova@gmail.com",
            private: false,
            name: "Testik 2",
            path: "/def",
            grade: 0,
            shots: 0,
            cardsCount: 2,
            type: "pack",
            rating: 0,
            created: "2021-06-07T16:01:05.557Z",
            updated: "2021-06-07T16:01:27.772Z",
            more_id: "6093cdb0d204d400042b77d9",
            __v: 0

        }
    ] as Array<PackResponseType>
}


//actions
export const actionsTable = {
    setPacks: (packs: Array<PackResponseType>) => {
        return {
            type: 'friday/table/setPacks',
            payload: {packs}
        }
    },
    addPack: (pack: PackType) => {
        return {
            type: 'friday/table/addPack',
            payload: {pack}
        } as const
    }


}

export const addPackTC = (name = 'no Name', price?: number): AppThunk => async (dispatch, getState) => {

    const pack: PackType = {name, price}
    dispatch ( actionsFindAndPagination.setSearchValueAC ( name ) )
    try {
        const response = await TableAPI.setNewPack ( pack )
        dispatch ( getPacksTC () )
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log ( error )

    }
}

//reducer
const tableReducer = (state = initialProfileState, action: TableActionsTypes): InitialStateTableType => {
    switch (action.type) {
        case "friday/table/setPacks": {
            return {...state, packs: [...action.payload.packs]}
        }
        /*case "friday/table/addPack": {
            return {...state}

        }*/
        default:
            return state
    }
}
export default tableReducer;
//types
export type TableActionsTypes = InferActionsType<typeof actionsTable>;
export type InitialStateTableType = typeof initialProfileState;

export type PackType = {
    name?: string // если не отправить будет таким
    path?: string // если не отправить будет такой
    grade?: number // не обязателен
    shots?: number // не обязателен
    rating?: number // не обязателен
    price?: number
    deckCover?: string // не обязателен
    private?: boolean // если не отправить будет такой
    type?: "pack" // если не отправить будет таким
}