import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { message, Spin } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { addUser } from "../../../store/User/action";
import styles from "./signUp.module.css";
import { PATH_SIGNIN } from "../../../routes/Routes/routes.path";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onHandleSignUp = (data) => {
    setLoading(true);
    const newData = { ...data, time: moment().format() };
    dispatch(addUser(newData));
    setTimeout(() => {
      setLoading(false);
      message.success({
        content: "Đăng ký thàng công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      history.push(PATH_SIGNIN);
    }, 1000);
  };
  return (
    <div>
      <div className={styles.banner}>
        <h5> Đăng Ký </h5>{" "}
      </div>{" "}
      <Spin spinning={isLoading} delay={500}>
        <form className={styles.login} onSubmit={handleSubmit(onHandleSignUp)}>
          <div className={styles.email}>
            <label htmlFor="true"> Tên </label>{" "}
            <input
              style={{ marginLeft: "50px" }}
              type="text"
              placeholder="Tên..."
              {...register("name", { required: true })}
            />{" "}
            <br />{" "}
            {errors.password && (
              <p style={{ color: "red", textAlign: "center" }}>
                Bắt buộc phải điền{" "}
              </p>
            )}{" "}
          </div>{" "}
          <div className={styles.email}>
            <label htmlFor="true"> Số ĐT </label>{" "}
            <input
              style={{ marginLeft: "30px" }}
              type="text"
              placeholder="Số điện thoại..."
              {...register("phone", { required: true })}
            />{" "}
            <br />{" "}
            {errors.password && (
              <p style={{ color: "red", textAlign: "center" }}>
                Bắt buộc phải điền{" "}
              </p>
            )}{" "}
          </div>{" "}
          <div className={styles.email}>
            <label htmlFor="true"> Email </label>{" "}
            <input
              style={{ marginLeft: "35px" }}
              type="email"
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
              style={{ marginLeft: "8px" }}
              type="password"
              placeholder="password..."
              {...register("password", { required: true })}
            />{" "}
            <br />{" "}
            {errors.password && (
              <p style={{ color: "red", textAlign: "center" }}>
                Bắt buộc phải điền{" "}
              </p>
            )}{" "}
          </div>{" "}
          <div className={styles.email} style={{ padding: "15px 0" }}>
            <label htmlFor="true"> Địa chỉ </label>{" "}
            <input
              style={{ marginLeft: "30px" }}
              type="text"
              placeholder="Địa chỉ..."
              {...register("address", { required: true })}
            />{" "}
            <br />{" "}
            {errors.address && (
              <p style={{ color: "red", textAlign: "center" }}>
                Bắt buộc phải điền{" "}
              </p>
            )}{" "}
          </div>
          <button type="submit" className={styles.button}>
            Đăng Ký{" "}
          </button>{" "}
        </form>{" "}
      </Spin>{" "}
    </div>
  );
};

export default SignUp;
