/* eslint-disable no-unused-expressions */
import React from 'react'
import s from "./Buttons.module.css"
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

const Butt_Users = (props) => {

    return(
        <>
      <NavLink to="/users"> 
        <button type='button' className={cn(
            s.butt
        )} onClick = {() => {props.getUsers(props.page,props.count)}} >Users</button>
       </NavLink>
        </>
    ) 
}
export default Butt_Users