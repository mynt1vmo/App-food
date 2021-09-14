import { message } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { PATH_CHECKOUT_SUCCESS } from "../../../routes/Routes/routes.path";
import {
  removeCart,
  removeItemcart,
  updateQuantity
} from "../../../store/Cart/action";
import { checkOut } from "../../../store/Order/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import styles from "./cart.module.css";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.signIn);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    dispatch(showSpinning());

    const value = {
      ...data,
      detail: [...Object.values(cart)]
    };
    if (Object.keys(cart).length === 0) {
      message.success({
        content: "Bạn thêm sản phẩm vào giỏ hàng",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
    } else {
      dispatch(checkOut(value));
      dispatch(removeCart());
      history.push(PATH_CHECKOUT_SUCCESS);
    }

    setTimeout(() => {
      dispatch(hiddenSpinning());
    }, 2000);
  };
  const newCart = Object.values(cart);
  return (
    <div>
      <h5
        style={{ textAlign: "center", paddingTop: "20px", fontWeight: "bold" }}
      >
        Giỏ hàng
      </h5>
      <table className={styles.cart}>
        <tr>
          <th> Tên </th>
          <th> Hình ảnh </th>
          <th> Số lượng </th>
          <th> Giá </th>
          <th> Hành động </th>
        </tr>
        {Object.values(cart).map((item) => (
          <tr key={item?.id}>
            <td> {item?.name} </td>
            <td>
              <img src={item?.image} alt="" width="150px" />
            </td>
            <td>
              <input
                type="number"
                defaultValue={item?.quantity}
                width="40px"
                min={1}
                className={styles.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      ...item,
                      quantity: Number(e.target.value)
                    })
                  )
                }
              />
            </td>
            <td>
              <p style={{ fontWeight: "700" }}>
                {(item?.price * item?.quantity).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND"
                })}
              </p>
            </td>
            <td>
              <button
                className="btn"
                style={{
                  paddingLeft: "30px",
                  fontSize: "18px",
                  color: "red"
                }}
                onClick={() => dispatch(removeItemcart(item?.id))}
                type="submit"
              >
                <BsTrash />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className={styles.payment_details}>
        <Row className="my-5">
          <Col>
            <h5 style={{ fontWeight: "700" }}>Chi tiết thanh toán</h5>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.name}>
                <label htmlFor> Họ và tên : </label>
                <br />
                <input
                  type="text"
                  defaultValue={user.payload?.user?.name}
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <div className={styles.address}>
                <label htmlFor>Địa chỉ cụ thể :</label>
                <br />
                <input
                  type="text"
                  defaultValue={user.payload?.user?.address}
                  {...register("address", { required: true })}
                />
                <br />
                {errors.address && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <div className={styles.city}>
                <label htmlFor>Thành phố :</label>
                <br />
                <input
                  type="text"
                  defaultValue={user.payload?.user?.city}
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <div className={styles.phone}>
                <label htmlFor>Số điện thoại :</label>
                <br />
                <input
                  type="text"
                  defaultValue={user.payload?.user?.phone}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <div className={styles.email}>
                <label htmlFor>Email :</label>
                <br />
                <input
                  type="text"
                  defaultValue={user.payload?.user?.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <div className={styles.info}>
                <label htmlFor>Thông tin thêm :</label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="5"
                  placeholder=" Ghi chú đơn hàng (tùy chọn)"
                  defaultValue={user.payload?.user?.info}
                  {...register("info", { required: true })}
                />
                {errors.info && (
                  <p style={{ color: "red" }}>Bắt buộc phải nhập</p>
                )}
              </div>
              <button type="submit" className={styles.button}>
                Thanh toán
              </button>
            </form>
          </Col>
          <Col>
            <h5 style={{ fontWeight: "700" }}>Tổng số giỏ hàng</h5>
            <div className={styles.sum}>
              <span style={{ padding: "10px 20px", fontWeight: "700" }}>
                Tổng :
                <p
                  style={{
                    color: "red",
                    fontWeight: "700",
                    fontSize: "18px",
                    marginLeft: "20px"
                  }}
                >
                  {newCart
                    .reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        currentValue.price * currentValue.quantity,
                      0
                    )
                    .toLocaleString("vi", {
                      style: "currency",
                      currency: "VND"
                    })}
                </p>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
