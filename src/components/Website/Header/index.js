import React from "react";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.css";
import {
  PATH_MENU,
  PATH_CONTACT,
  PATH_HOME,
  PATH_SERVICE,
  PATH_ABOUT,
  PATH_BLOG
} from "../../../routes/Routes/routes.path";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header_main}>
      <div className="logo">
        <Link to={PATH_HOME}>
          <img
            src="https://jollibee.com.vn/images/logo.png"
            alt=""
            width="100px"
          />
        </Link>
      </div>
      <div className="d-flex align-items-end flex-column justify-content-between bd-highlight ">
        <div className={styles.header_login}>
          <Link to="/" className="mx-3 px-2 border-end">
            <BsFillPersonFill /> Đăng Ký
          </Link>
          <Link to="/">Đăng Nhập </Link>
        </div>
        <ul className={styles.navbar}>
          <li className={styles.navbar_item}>
            <NavLink activeClassName={styles.NavLink} to={PATH_HOME}>
              TRANG CHỦ
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink activeClassName={styles.NavLink} to={PATH_ABOUT}>
              VỀ JOLLIBEE
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink activeClassName={styles.NavLink} to={PATH_MENU}>
              THỰC ĐƠN
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink activeClassName={styles.NavLink} to={PATH_SERVICE}>
              DỊCH VỤ
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink activeClassName={styles.NavLink} to={PATH_BLOG}>
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
            <Link to="/" style={{ fontSize: "20px", color: "white" }}>
              <BsBag />
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact d-flex align-items-center">
        <Link to="">
          <img src="https://jollibee.com.vn/images/home/delivery.png" alt="" />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
