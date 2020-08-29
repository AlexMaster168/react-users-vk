import {ADD_USER, LOAD_USER, REMOVE_USER} from "../actionType";
import axios from "../../axios/axios-users";

export function LOAD() {
    return async dispatch => {

        try {
            const response = await axios.get('./Users.json')
            const data = await response.json()
            const res = Object.keys(data).map(key => ({ ...data[key], id: key }))
            dispatch({type: LOAD_USER, user: res})
        } catch (e) {
            console.log(e)
        }
    }
}

export function ADD(username, usernameVk, id) {
    return async dispatch => {

        const values = {
            username,
            usernameVk,
            id
        }

        try {
            const response = await axios.post('./Users.json', values)
            const data = response.data
            dispatch({type: ADD_USER, payload: data.name})
        } catch (e) {
            console.log(e)
        }
    }

}

export function REMOVE(id) {
    return async dispatch => {
        try {
            await axios.delete('./Users.json')
            dispatch({type: REMOVE_USER, id})
        } catch (e) {
            console.log(e)
        }
    }
}
