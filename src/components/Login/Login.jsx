import React from "react";
import {useState} from 'react'
import s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getPositionsThunkCreator,postUserThunkCreator,getTokenThunkCreator } from "../../redux/login_reducer";
import cn from "classnames";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

const Login = (props) => {

  // const [file, setFile] = useState()
  
  useEffect(() => {
    props.getPositionsThunk();
    props.getTokenThunk()
  }, []);

  // const onMainPhotoSelected = (event) => {
  //   event.preventDefault()
  //   if (event.target.files[0]) {
  //     setFile(event.target.files[0]);
  // }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      position_id: "1",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
  
    const formData = new FormData()
    formData.append("position_id",data.position_id)
    formData.append('name',data.firstName)
    formData.append('email',data.email)
    formData.append("phone",data.phone)
    formData.append("photo", data.photo[0])
      
     props.postUserThunk(formData,props.token)
  
   // alert(JSON.stringify(data));

    reset();
    
     
  };

   if(props.toggleProfile) return <Redirect to = {"/users"} />

  return (
    <div className={s.container}>
      <h2 className={s.login_title}>Working with POST request</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${s.input_name} ${s.input}`}
          type="text"
          placeholder="Your name"
          {...register("firstName", {
            required: "Поле обязательно к заполнению...",
            minLength: {
              value: 2,
              message: "Миннимум 2 символа...",
            },
            maxLength: {
              value: 60,
              message: "Максимум 60 символов...",
            },
          })}
        />
        <div className={s.error_info}>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
        </div>
        <input
          className={`${s.input_email} ${s.input}`}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Поле обязательно к заполнению...",
            pattern:
              /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          })}
        />
        <div className={s.error_info}>
          {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
        </div>
        <div className={s.block_tel}>
          <input
            className={`${s.input_tel} ${s.input}`}
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Поле обязательно к заполнению...",
              pattern: /^[\+]{0,1}380([0-9]{9})$/,
            })}
          />
          <label className={s.tel_format}>+38(xxx)xx-xx-xx</label>
        </div>
        <div className={s.error_tel}>
          {errors?.phone && <p>{errors?.phone?.message || "Error"}</p>}
        </div>
        <div className={s.block_radio}>
          <h5 className={s.title_position}>Select your position</h5>
       

          <ul className={s.ul_radio}>
            {props.positions.map((item, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={item.id}
                  {...register("position_id", {
                    required :true
                  })}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.input_file}>
          {/* <Form.Control type="file" size="lg" {...register("file", {
            required :true
          })} /> */}
          <input type="file" size = "35"  {...register("photo",{required :true})} />
        </div>

        <button
          type="submit"
          className={cn(s.login, !isValid && s.disabled_login)}
          disabled={!isValid}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    positions: state.loginPage.positions,
    token : state.loginPage.token,
    toggleProfile : state.loginPage.toggleProfile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPositionsThunk: () => {
      dispatch(getPositionsThunkCreator());
    },
    postUserThunk : (formData,token) => {
      dispatch(postUserThunkCreator(formData,token))
    },
    getTokenThunk : () => {
      dispatch (getTokenThunkCreator())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
