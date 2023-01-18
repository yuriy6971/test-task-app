import React from 'react'
import s from './Preloader.module.css'
import loader from "../../assets/images/loader.svg"


const Preloader = (props) => {
   return(
       <div className = {s.preload}>
           <img src={loader} alt="loader" />
       </div>
   )
}

export default Preloader