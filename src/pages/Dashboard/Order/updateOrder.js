import { message } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Label, Form, Input } from "reactstrap";

import OrderApi from "../../../apis/OrderApi";
import { PATH_DASHBROAD_ORDER } from "../../../routes/Routes/routes.path";
import { editOrder } from "../../../store/Order/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";

const UpdateOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [order, setOrder] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await OrderApi.get(id);
      reset({ ...data });
      setOrder(data);
    } catch (error) {
      return error;
    }
  }, []);
  const onEditOrder = (data) => {
    dispatch(showSpinning());
    const newData = { ...data, time: moment().format() };
    dispatch(editOrder(newData));
    setTimeout(() => {
      message.success({
        content: "Chỉnh sửa thành công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      dispatch(hiddenSpinning());
    }, 1000);
    history.push(PATH_DASHBROAD_ORDER);
  };
  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onEditOrder)}>
      <FormGroup>
        <h5>Chỉnh sửa hóa đơn</h5>
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
            value={order?.name}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="examplecity">Thành phố</Label>
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
            name="city"
            id="examplecity"
            placeholder="Mật khẩu "
            defaultValue={order?.city}
            {...register("city", { required: true })}
          />
          {errors.city && (
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
            value={order?.email}
          />
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
            defaultValue={order?.phone}
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
            defaultValue={order?.address}
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span style={{ color: "red" }}>Bắt buộc phải nhập</span>
          )}
        </div>
      </FormGroup>

      <button type="submit" className="btn btn-warning my-3">
        Lưu
      </button>
    </Form>
  );
};

export default UpdateOrder;
