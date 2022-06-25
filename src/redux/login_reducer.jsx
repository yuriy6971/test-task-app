import { ReplyOutlined } from "@mui/icons-material"
import { act } from "react-dom/test-utils"
import {loginAPI} from "../api/api"
import {getNewUsersThunkCreator} from "./users_reducer"

const SET_POSITIONS = "SET_POSITIONS"
const SET_TOKEN = "SET_TOKEN"
const POST_USER = "POST_USER"

const initialState = {
    positions : [],
    token : ""
}

const login_Reducer = (state = initialState,action) => {
    switch(action.type){
        case SET_POSITIONS :
            return {
                ...state,
                positions :action.positions
            }
        case SET_TOKEN : 
        return {
               ...state,
               token : action.token
        }

        default : return state
    }
}

const setPositionsActionCreator = (server_positions) => {
    return {
        type :SET_POSITIONS,
        positions :server_positions
    }
}

const setTokenActionCreator = (server_token) => {
    return {
        type : SET_TOKEN,
        token :server_token
    }
}

export const getPositionsThunkCreator = () => {
    return (dispatch) => {
        loginAPI.getPositions().then(response => {
            dispatch(setPositionsActionCreator(response.data.positions))
        })
    }
}

export const getTokenThunkCreator = () => {
    return (dispatch) => {
        loginAPI.getToken().then(response => {
            dispatch(setTokenActionCreator(response.data.token))
        })
    }
}

export const postUserThunkCreator = (formData,token) => {
    return (dispatch) => {
        loginAPI.postUser(formData,token).then(response => {
            if(response.data.success){
                dispatch(getNewUsersThunkCreator())
            }
            else  alert(response.data.message)
        })
    }
}

export default login_Reducer