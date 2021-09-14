import React from "react";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import styles from "./header.module.css";
import {
  PATH_MENU,
  PATH_CONTACT,
  PATH_HOME,
  PATH_SERVICE,
  PATH_BLOG,
  PATH_SIGNUP,
  PATH_SIGNIN,
  PATH_CART,
  PATH_DASHBROAD_CATEGORY
} from "../../../routes/Routes/routes.path";
import { logOut } from "../../../store/Login/action";
import { removeCart } from "../../../store/Cart/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";

const Header = () => {
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.signIn);
  const cart = useSelector((state) => state.cart);
  const newCart = Object.values(cart);
  let roles;
  if (Number(stateUser.payload?.user?.role) === 0) {
    roles = <Link to={PATH_DASHBROAD_CATEGORY}>Dashboard</Link>;
  }
  const SignOut = () => {
    const confirm = window.confirm("Bạn chắc chắn muốn đăng xuất");
    dispatch(showSpinning());
    if (confirm) {
      dispatch(logOut());
      dispatch(removeCart());
      setTimeout(() => {
        message.success({
          content: "Bạn đăng xuất thành công",
          className: "custom-class",
          style: {
            marginTop: "20vh"
          }
        });
        dispatch(hiddenSpinning());
      }, 500);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_main}>
        <div className="logo">
          <Link to={PATH_HOME}>
            <img
              src="./assets/image/logo-white.png"
              alt=""
              className="img-fluid"
              style={{ paddingTop: "15px" }}
            />
          </Link>
        </div>
        <div className="d-flex align-items-end flex-column justify-content-between bd-highlight ">
          <div className={styles.header_login}>
            {stateUser.payload?.user?.name?.length > 1 ? (
              <div>
                <Link to={PATH_HOME} className={styles.name}>
                  Hi,{stateUser.payload?.user?.name}
                  <ul className={styles.my_account}>
                    <li>
                      <Link
                        className="text-center"
                        to={`/user/detail/${stateUser.payload?.user?.id}`}
                      >
                        Tài khoản
                      </Link>
                    </li>
                    <li>{roles}</li>
                  </ul>
                </Link>
                <Link className="px-3" onClick={SignOut}>
                  Đăng xuất
                </Link>
              </div>
            ) : (
              <div>
                <Link to={PATH_SIGNUP} className="mx-3 px-2 border-end">
                  <BsFillPersonFill /> Đăng Ký
                </Link>
                <Link to={PATH_SIGNIN}>Đăng Nhập </Link>
              </div>
            )}
          </div>
          <ul className={styles.navbar}>
            <li className={styles.navbar_item}>
              <NavLink activeClassName={styles.navLink} to={PATH_HOME}>
                TRANG CHỦ
              </NavLink>
            </li>
            <li className={styles.navbar_item}>
              <NavLink activeClassName={styles.navLink} to={PATH_MENU}>
                THỰC ĐƠN
              </NavLink>
            </li>
            <li className={styles.navbar_item}>
              <NavLink activeClassName={styles.navLink} to={PATH_SERVICE}>
                DỊCH VỤ
              </NavLink>
            </li>
            <li className={styles.navbar_item}>
              <NavLink activeClassName={styles.navLink} to={PATH_BLOG}>
                TIN TỨC
              </NavLink>
            </li>
            <li className={styles.navbar_item}>
              <NavLink activeClassName={styles.NavLink} to={PATH_CONTACT}>
                LIÊN HỆ
              </NavLink>
            </li>
            <li
              style={{
                listStyle: "none",
                padding: "10px 40px"
              }}
            >
              <Link to={PATH_CART} style={{ fontSize: "20px", color: "white" }}>
                <BsBag />(
                {newCart.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.quantity,
                  0
                )}
                )
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact d-flex align-items-center">
          <Link to="">
            <img
              src="https://jollibee.com.vn/images/home/delivery.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
