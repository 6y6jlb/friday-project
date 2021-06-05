import {instance} from "./instatnce";
import {ProfileResponseType} from "../bll/profile-reducer";
import {RegisterDataType} from "../bll/registration-reducer";



export const TableAPI = {
   getCards: (packName:string,min:number,max:number,sortPacks:any,page:number,pageCount:number)=> {
       return instance.get ( 'cards/pack', {params: {packName,min,max,sortPacks,page,pageCount}} )
   }
}