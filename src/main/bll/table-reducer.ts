import {InferActionsType} from "./store";
import {PackResponseType} from "../dal/tableAPI";

//state
const initialProfileState = {
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
    }


}

//reducer
const tableReducer = (state = initialProfileState, action: TableActionsTypes): InitialStateTableType => {
    switch (action.type) {
        case "friday/table/setPacks": {
            return {...state, packs: [...action.payload.packs]}
        }
        default:
            return state
    }
}
export default tableReducer;
//types
export type TableActionsTypes = InferActionsType<typeof actionsTable>;
export type InitialStateTableType = typeof initialProfileState;
