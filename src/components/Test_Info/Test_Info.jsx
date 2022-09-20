import React from "react";
import s from "./Test_Info.module.css";
import Butt_Sign from "../../assets/buttons/Butt_Sign";

const Test_Info = () => {
  return (
    <div className={s.info_block}>
      <div className={s.text_container}>
        <h2 className={s.test_title}>
          Test assignment for front-end developer
        </h2>
        <p className={s.test_text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>

        <div className={s.sign}>
          <Butt_Sign />
        </div>
      </div>
    </div>
  );
};
export default Test_Info;
