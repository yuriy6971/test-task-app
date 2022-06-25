import React from "react";
import s from "./Users_Item.module.css";

const Users_Item = (props) => {
  return (
    <div className={s.item_user_block}>
      <img className={s.photo_user} src={props.photo} alt="pics" />
      <p className={s.user_name}>{props.name}</p>
      <div className={s.info_user}>
        <p className={s.user_position}>{props.position}</p>
        <p className={s.user_email}>{props.email}</p>
        <p className={s.user_phone}>{props.phone}</p>
      </div>
    </div>
  );
};

export default Users_Item;
