import { message } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import UserApi from "../../../apis/UserApi";
import { PATH_HOME } from "../../../routes/Routes/routes.path";
import { signIn } from "../../../store/Login/action";

import styles from "./login.module.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onHandleSignIn = async (value) => {
    try {
      const { data: item } = await UserApi.login(value);
      message.success({
        content: "Đăng nhập thàng công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      dispatch(signIn(item));
      history.push(PATH_HOME);
    } catch (err) {
      const newError = err.response?.data;
      setError(newError);
    }
  };
  return (
    <div>
      <div className={styles.banner}>
        <h5> Đăng Nhập </h5>{" "}
      </div>{" "}
      <p style={{ color: "red", textAlign: "center" }}> {error} </p>{" "}
      <form className={styles.login} onSubmit={handleSubmit(onHandleSignIn)}>
        <div className={styles.email}>
          <label htmlFor="true"> Email </label>{" "}
          <input
            type="text"
            placeholder="Email..."
            name="email"
            {...register("email", { required: true })}
          />{" "}
          <br />{" "}
          {errors.email && (
            <p style={{ color: "red", textAlign: "center" }}>
              Bắt buộc phải điền{" "}
            </p>
          )}{" "}
        </div>{" "}
        <div className={styles.password}>
          <label htmlFor="true"> Mật khẩu </label>{" "}
          <input
            type="password"
            placeholder="Mật khẩu..."
            {...register("password", { required: true })}
          />{" "}
          <br />{" "}
          {errors.password && (
            <p style={{ color: "red", textAlign: "center" }}>
              Bắt buộc phải điền{" "}
            </p>
          )}{" "}
        </div>{" "}
        <button type="submit" className={styles.button}>
          Đăng Nhập{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default SignIn;
