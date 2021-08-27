import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavbarMenu = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <ul className={styles.navbar_menu}>
        {categories.categories?.map((item) => (
          <li key={item.id}>
            <Link to={{ pathname: `/category/${item.id}` }}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenu;
