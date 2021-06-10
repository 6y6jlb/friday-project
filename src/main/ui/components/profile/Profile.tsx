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
import firstAva   from  './img/Img1.png'
import secondAva from './img/img2.png'
import thirdAva from './img/img3.png'

export const Profile: React.FC = (props) => {

    const dispatch = useDispatch ()
    const profile = useSelector<AppStateType, ProfileResponseType > ( state => state.profile.profileEntity )
    const isAuth = useSelector<AppStateType, boolean> ( state => state.auth.isAuth )

    const [change, setChange] = useState(false)
    const [changeAva, setChangeAva] = useState(false)
    const [avatar, setNewAva] = useState(profile &&  profile.avatar || "http://placehold.it/300x300" )
    const [name, setName] = useState((profile && profile.name) || (profile &&  profile.email) || 'init')


    useEffect (() => {
        dispatch (meTC ())
    }, [])

    useEffect(() => {
        document.title = 'Profile'
    },[])



    const avatarObj = [firstAva, secondAva, thirdAva]

    // const avatarObj = {
    //     1:'http://www.granadoespada.com/uploads/character/5163aee85b1e6157cb82779a92b03740.jpg',
    //     2:'http://www.granadoespada.com/uploads/character/15fb799cb7880434764bb0b51d438cb1.png',
    //     3:'http://www.granadoespada.com/uploads/character/04f253933ccde4810846c692bbf897ec.jpg',
    // }

    const changeAvatar = (e:React.MouseEvent<HTMLSpanElement>) => {
        setChangeAva(false)

       //эта функция принимает обьект и ключ, и сама типизирует, по идее должно работать, но не работает, оставил для красоты
        const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
        // @ts-ignore
        let key = getKeyValue(avatarObj)(e.currentTarget.id);
        // @ts-ignore
        setNewAva(key)
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
            <img className={ style.image } src={avatar } alt={'error'}/>

            {!changeAva &&
            <>
                <span>Change avatar? </span>
                <SuperButton onClick={() => {setChangeAva(true)}}> Yes </SuperButton>
            </>
            }
            {changeAva &&
            <div className={style.changeAva}>
                <span id={'0'}  onClick={changeAvatar}>
                    <img className={ style.avatar } src={avatarObj[0] } alt={'error1'}/>
                </span>
                <span id={'1'}  onClick={changeAvatar}>
                     <img className={ style.avatar } src={avatarObj[1] } alt={'error2'}/>
                </span>
                <span id={'2'}  onClick={changeAvatar} >
                     <img className={ style.avatar } src={avatarObj[2] } alt={'error3'}/>
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