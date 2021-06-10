import {instance} from "./instatnce";
import {PackType} from "../bll/table-reducer";


export const TableAPI = {
    getPacks: (packName: string, min: number, max: number, sortPacks: any, page: number, pageCount: number) => {
        return instance.get<PacksResponseType> ( 'cards/pack', {
            params: {
                packName,
                min,
                max,
                sortPacks,
                page,
                pageCount
            }
        } )
    },
    setNewPack: (pack:PackType)=>{
        return instance.post('cards/pack',{cardsPack: pack})
    }
}

export type PackResponseType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
}

export type PacksResponseType = {
    cardPacks: Array<PackResponseType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

