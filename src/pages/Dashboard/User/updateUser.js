import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { message } from "antd";
import moment from "moment";

import UserApi from "../../../apis/UserApi";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { PATH_DASHBROAD_USER } from "../../../routes/Routes/routes.path";
import { editUser } from "../../../store/User/action";

const UpdateUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [user, setUser] = useState();
  useEffect(async () => {
    try {
      const { data } = await UserApi.get(id);
      reset({ ...data });
      setUser(data);
    } catch (error) {
      return error;
    }
  }, []);
  const onEditUser = (data) => {
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
      history.push(PATH_DASHBROAD_USER);
    }, 1000);
  };
  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onEditUser)}>
      <FormGroup>
        <h5>Chỉnh sửa tài khoản</h5>
        <Input plaintext value="Một vài giá trị/văn bản" />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="exampleName">Tên</Label>
        {Number(user?.role) === 0 ? (
          <div>
            <input
              style={{
                width: "100%",
                border: "1px solid black",
                borderRadius: " 5px",
                outline: "none",
                padding: "5px 20px"
              }}
              type="text"
              name="Name"
              id="exampleName"
              placeholder="Tên "
              defaultValue={user?.name}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>bắt buộc phải nhập</span>
            )}
          </div>
        ) : (
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="Name"
            id="exampleName"
            placeholder="Tên "
            value={user?.name}
          />
        )}
      </FormGroup>
      {errors.name && <span>bắt buộc phải nhập</span>}
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        {Number(user?.role) === 0 ? (
          <div>
            <input
              style={{
                width: "100%",
                border: "1px solid black",
                borderRadius: " 5px",
                outline: "none",
                padding: "5px 20px"
              }}
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>bắt buộc phải nhập</span>
            )}
          </div>
        ) : (
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            value={user?.email}
          />
        )}
      </FormGroup>

      <FormGroup className="my-3">
        <Label for="examplePhone">Điện thoại</Label>
        {Number(user?.role) === 0 ? (
          <div>
            <input
              style={{
                width: "100%",
                border: "1px solid black",
                borderRadius: " 5px",
                outline: "none",
                padding: "5px 20px"
              }}
              type="text"
              name="Phone"
              id="examplePhone"
              placeholder="Điện thoại"
              defaultValue={user?.phone}
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>bắt buộc phải nhập</span>
            )}
          </div>
        ) : (
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="Phone"
            id="examplePhone"
            placeholder="Điện thoại"
            value={user?.phone}
          />
        )}
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="examplePhone">Địa chỉ</Label>
        {Number(user?.role) === 0 ? (
          <div>
            <input
              style={{
                width: "100%",
                border: "1px solid black",
                borderRadius: " 5px",
                outline: "none",
                padding: "5px 20px"
              }}
              type="text"
              name="address"
              id="exampleaddress"
              placeholder="Địa chỉ...."
              defaultValue={user?.address}
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span style={{ color: "red" }}>bắt buộc phải nhập</span>
            )}
          </div>
        ) : (
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="address"
            id="exampleaddress"
            placeholder="Địa chỉ...."
            value={user?.address}
          />
        )}
      </FormGroup>

      <FormGroup>
        <Label for="exampleCustomSelect">Quyền :</Label>
        <select
          name=""
          id=""
          defaultValue={Number(user?.role)}
          {...register("role", { required: true })}
        >
          <option value={Number(0)}>Quản trị</option>
          <option value={Number(1)}>Khách hàng</option>
        </select>
      </FormGroup>

      <button type="submit" className="btn btn-warning my-3">
        Lưu
      </button>
    </Form>
  );
};

export default UpdateUser;
