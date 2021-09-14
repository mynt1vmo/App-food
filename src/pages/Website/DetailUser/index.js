import { message } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import UserApi from "../../../apis/UserApi";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { editUser } from "../../../store/User/action";

import styles from "./detailUser.module.css";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await UserApi.get(id);
      reset({ ...data, password: undefined });
      setUser(data);
    } catch (error) {
      return error;
    }
  }, []);
  const onHandleSubmit = (data) => {
    dispatch(showSpinning());
    const newData = { ...data, time: moment().format() };
    dispatch(editUser(newData));
    setTimeout(() => {
      message.success({
        content: "Chỉnh sửa thành công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      dispatch(hiddenSpinning());
    }, 400);
  };
  return (
    <div>
      <h5 className="text-center mt-5">Hồ Sơ Của Tôi</h5>
      <div className={styles.detail_user}>
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className={styles.name}>
            <label htmlFor> Họ và tên : </label>
            <br />
            <input
              type="text"
              defaultValue={user?.name}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
            )}
            <br />
          </div>
          <div className={styles.phone}>
            <label htmlFor>Số điện thoại :</label>
            <br />
            <input
              type="text"
              defaultValue={user?.phone}
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
            )}
          </div>
          <div className={styles.email}>
            <label htmlFor>Email :</label>
            <br />
            <input
              type="text"
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
            )}
          </div>
          <div className={styles.email}>
            <label htmlFor>Địa chỉ:</label>
            <br />
            <input
              type="text"
              defaultValue={user?.address}
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Lưu
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailUser;
