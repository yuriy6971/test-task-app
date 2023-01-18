import React from "react";
import s from "./Users.module.css";
import { connect } from "react-redux";
import Users_Item from "./Users_Item/Users_Item";
import Butt_ShowMore from "../../assets/buttons/Butt_ShowMore";
import { getUsersThunkCreator } from "../../redux/users_reducer";


const Users = (props) => {
  return (
    <div className={s.users_container}>
      <h2 className={s.users_title}>Working with GET request</h2>
      {/* <p>token : {props.token} </p> */}
      <div className={s.block_cart_users}>
        {props.users
          .sort((a, b) =>
            a.registration_timestamp < b.registration_timestamp ? 1 : -1
          )
          .map((item, index) => (
            <Users_Item
              key={index.toString()}
              name={item.name}
              email={item.email}
              photo={item.photo}
              position={item.position}
              phone={item.phone}
              time={item.registration_timestamp}
            />
          ))}
      </div>

      <div className={s.butt_wrapper}>
        {props.page > 1 && props.users.length < props.total_users && (
          <Butt_ShowMore
            getShowMoreUsers={props.getUsersMoreThunk}
            count={props.count}
            page={props.page}
          />
        )}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    total_users: state.usersPage.total_users,
    count: state.usersPage.count,
    page: state.usersPage.page,
    token: state.loginPage.token,

  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUsersMoreThunk: (page, count) => {
      dispatch(getUsersThunkCreator(page, count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
