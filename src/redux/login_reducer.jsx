import { ReplyOutlined } from "@mui/icons-material"
import { act } from "react-dom/test-utils"
import {loginAPI} from "../api/api"
import {getNewUsersThunkCreator} from "./users_reducer"
import { Redirect } from "react-router-dom"

const SET_POSITIONS = "SET_POSITIONS"
const SET_TOKEN = "SET_TOKEN"
const POST_USER = "POST_USER"
const SET_IS_PROFILE = "SET_IS_PROFILE"
const SET_FALSE_PROFILE = "SET_FALSE_PROFILE"

const initialState = {
    positions : [],
    token : "",
    toggleProfile : false
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
        case SET_IS_PROFILE : 
        return {
            ...state,
            toggleProfile : action.boolProfile
        }
        case SET_FALSE_PROFILE : 
        return {
            ...state,
            toggleProfile : false
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

const setIsProfileActionCreator = (success) => {
    return {
        type :SET_IS_PROFILE,
        boolProfile : success
    }
}

 export const setFalseProfileActionCreator = () => {
    return {
        type : SET_FALSE_PROFILE
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
                dispatch(setIsProfileActionCreator(response.data.success))
               // console.log(response.data.success)
            }
            else  alert(response.data.message)
        })
    }
}

export default login_Reducer