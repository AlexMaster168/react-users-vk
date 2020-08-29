import React, {useEffect} from "react";
import cls from './Main.module.css'
import image from '../../Image/vk-logo-main.png'
import user from '../../Image/user-profile.png'
import {LOAD, REMOVE} from "../../redux/actions/Users";
import {useDispatch, useSelector} from "react-redux";

export const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LOAD())
    })


    const array = useSelector(state => state.users)

    const removeHandler = id => {
        const sure = window.confirm('Вы действительно хотите удалить?')
        if (sure) {
            dispatch(REMOVE(id))
        }
    }
    return (
        <div className={cls.wrapper}>
            <div className={cls.Main}>
                {
                    array.map((array) => {
                        return (
                            <>
                                <img src={user} className={cls.user} alt="user"/>
                                <input className='my-5' key={array.id} value={array.username} type='text'/>
                                <button onClick={removeHandler.bind(this, array.id)}>Удалить</button>
                                <img className={cls.vk} src={image} alt="vk"/>
                                <a
                                    href={array.usernameVk}
                                    className={cls.link}
                                    target='_blank'
                                    rel='noopener noreferrer'>Перейти</a>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

