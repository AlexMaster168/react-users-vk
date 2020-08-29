import cls from "./Create.module.css";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/Users";


export const Create = () => {

    const dispatch = useDispatch()


    const [username, setUsername] = useState('Введите ваш ник в vk')
    const [usernameVk, setUsernameVk] = useState('Введите ссылку на vk')

    function inputChange(username) {
        setUsername(username)
    }

    function inputChange2(usernameVk) {
        setUsernameVk(usernameVk)
    }

    function createUser() {
        if (username.trim() && usernameVk.trim()) {
            let id = Date.now()
            dispatch(ADD(username, usernameVk, id))
            setUsername('')
            setUsernameVk('')
        }
    }

    return (
        <div className={cls.create}>
            <input
                value={username}
                type="text"
                onChange={event => inputChange(event.target.value)}
            />
            <br/>
            <input
                value={usernameVk}
                type="text"
                onChange={event => inputChange2(event.target.value)}
            />
            <button onClick={createUser} className={cls.button}>Создать</button>
        </div>
    )
}