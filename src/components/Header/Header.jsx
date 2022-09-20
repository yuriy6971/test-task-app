import React from "react";
import s from "./Header.module.css";
import Logo from "../../assets/images/Logo.svg";
import Butt_Users from "../../assets/buttons/Butt_Users";
import Butt_Sign from "../../assets/buttons/Butt_Sign";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/users_reducer";
import {
  getTokenThunkCreator,
  setFalseProfileActionCreator,
} from "../../redux/login_reducer";
import { Link } from "react-router-dom";
import { PropaneSharp } from "@mui/icons-material";

const Header = (props) => {
  const getShowUsers = (page, count) => {
    !props.users.length && props.getUsersThunk(page, count);
  };

  return (
    <div className={s.head_container}>
      <div className={s.head_block}>
        <div className={s.head_logo}>
          <Link to="">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={s.head_buttons}>
          <Butt_Users
            getUsers={getShowUsers}
            page={props.page}
            count={props.count}
          />
          <Butt_Sign setFalseProfile = {props.setFalseProfile} />
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    count: state.usersPage.count,
    page: state.usersPage.page,
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUsersThunk: (page, count) => {
      dispatch(getUsersThunkCreator(page, count));
    },
    getTokenThunk: () => {
      dispatch(getTokenThunkCreator());
    },
    setFalseProfile: () => {
      dispatch(setFalseProfileActionCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
