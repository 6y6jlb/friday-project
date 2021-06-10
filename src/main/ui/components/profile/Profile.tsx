import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ProfileResponseType, updateAvatar, updateName} from "../../../bll/profile-reducer";
import style from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import {logOutTC, meTC} from "../../../bll/authorization-reducer";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";

export const Profile: React.FC = (props) => {

    const dispatch = useDispatch ()
    const profile = useSelector<AppStateType, ProfileResponseType > ( state => state.profile.profileEntity )
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )

    const [change, setChange] = useState(false)
    const [changeAva, setChangeAva] = useState(false)
    const [avatar, setNewAva] = useState<string>(profile &&  profile.avatar || "http://placehold.it/300x300" )
    const [name, setName] = useState((profile && profile.name) || (profile &&  profile.email) || 'init')


    useEffect ( () => {
        dispatch ( meTC () )
    }, [] )
    useEffect(() => {
        document.title='Profile'
    },[])


    let avatarObj = {
        1:'http://www.granadoespada.com/uploads/character/5163aee85b1e6157cb82779a92b03740.jpg',
        2:'http://www.granadoespada.com/uploads/character/15fb799cb7880434764bb0b51d438cb1.png',
        3:'http://www.granadoespada.com/uploads/character/04f253933ccde4810846c692bbf897ec.jpg',
    }


    const changeAvatar = (e:React.MouseEvent<HTMLSpanElement>) => {
        setChangeAva(false)
        //@ts-ignore
        setNewAva(avatarObj[e.currentTarget.id])
        dispatch(updateAvatar(avatar))
    }
    const changeName = () => {
        setChange(false)
        dispatch(updateName(name))
    }
    const logout = () => {
        dispatch (logOutTC ())
    };


    if (!isAuth) return <Redirect to={ PATH.AUTHORIZATION }/>


    return (
        <div className={ style.profileContainer }>
            <SuperButton value={ 'logout' } onClick={ logout }>logOut</SuperButton>
            <img className={ style.image } src={avatar } alt={avatar}/>

            {!changeAva &&
            <>
                <span>Change avatar? </span>
                <SuperButton onClick={() => {setChangeAva(true)}}> Yes </SuperButton>
            </>
            }
            {changeAva &&
            <div className={style.changeAva}>
                <span id={'1'}  onClick={changeAvatar}>
                    <img className={ style.avatar } src={avatarObj[1] } alt={avatar}/>
                </span>
                <span id={'2'}  onClick={changeAvatar}>
                     <img className={ style.avatar } src={avatarObj[2] } alt={avatar}/>
                </span>
                <span id={'3'}  onClick={changeAvatar}>
                     <img className={ style.avatar } src={avatarObj[3] } alt={avatar}/>
                </span>
            </div>}


            {!change &&
            <div >
                <h1 onDoubleClick={()=>{setChange(true)}} > {name}</h1>
            </div>}
            {change &&
            <div>
                <SuperInputText
                       autoFocus={true}
                       onBlur={changeName}
                       type="text"
                       value={name}
                       onChange={(e)=>{setName ( e.currentTarget.value )}}
                />
            </div>}

        </div>
    )

}