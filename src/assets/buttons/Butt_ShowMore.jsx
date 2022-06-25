import React from 'react'
import s from "./Buttons.module.css"

const Butt_ShowMore = (props) => {

    return(
        <div className={s.show_more_container}>
        <button type='button' className={s.butt} onClick = {() => {props.getShowMoreUsers(props.page,props.count)}} >Show more</button>
        </div>
    )
}
export default Butt_ShowMore