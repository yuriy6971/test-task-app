import React from "react";
import s from "./Test_Info.module.css";
import Butt_Sign from "../../assets/buttons/Butt_Sign";
import {connect} from "react-redux"
import {setFalseProfileActionCreator} from "../../redux/login_reducer"
import { PropaneSharp } from "@mui/icons-material";

const Test_Info = (props) => {
  return (
    <div className={s.info_block}>
      <div className={s.text_container}>
        <h2 className={s.test_title}>
          Test assignment for front-end developer
        </h2>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>

        <div className={s.sign}>
          <Butt_Sign setFalseProfile = {props.setFalseProfile} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFalseProfile: () => {
      dispatch(setFalseProfileActionCreator());
    }
  }
}

export default connect (null, mapDispatchToProps) (Test_Info)
