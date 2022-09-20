import React from 'react'
import s from "./Buttons.module.css"
import { NavLink } from 'react-router-dom'

const Butt_Sign = (props) => {

    return(
        <>
         <NavLink to="/login"> 
        <button type='button' className={s.butt} onClick = {props.setFalseProfile} >Sign up</button>
        </NavLink>
        </>
    )
}
export default Butt_Sign