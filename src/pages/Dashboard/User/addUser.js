import { message } from "antd";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";

import { PATH_DASHBROAD_USER } from "../../../routes/Routes/routes.path";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { addUser } from "../../../store/User/action";

const AddUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onAddUser = (data) => {
    dispatch(showSpinning());
    const newData = { ...data, time: moment().format() };
    dispatch(addUser(newData));
    setTimeout(() => {
      message.success({
        content: "Them thành công",
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
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onAddUser)}>
      <FormGroup>
        <h5>Thêm tài khoản</h5>
        <Input plaintext value="Một vài giá trị/văn bản" />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="exampleName">Tên</Label>
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
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Mật khẩu</Label>
        <div>
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="password"
            name="password"
            id="examplepassword"
            placeholder="Mật khẩu "
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
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
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>

      <FormGroup className="my-3">
        <Label for="examplePhone">Điện thoại</Label>
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
            {...register("phone", {
              pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
            })}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="examplePhone">Địa chỉ</Label>
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
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>

      <FormGroup>
        <Label for="exampleCustomSelect">Quyền :</Label>
        <select name="" id="" {...register("role", { required: true })}>
          <option value="">Select</option>
          <option value={Number(0)}>Quản trị</option>
          <option value={Number(1)}>Khách hàng</option>
        </select>
        {errors.role && (
          <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
        )}
      </FormGroup>

      <button type="submit" className="btn btn-warning my-3">
        Thêm
      </button>
    </Form>
  );
};

export default AddUser;
