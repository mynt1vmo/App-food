import React from "react";
import NavbarMenu from "./List/NavbarMenu";
import ProductCategories from "./List/ProductCategories";
import styles from "./menu.module.css";

const Menu = () => (
  <div>
    <div className="banner">
      <img
        src="https://jollibee.com.vn/uploads/group/640f3ac55b0e2b-bannerthcn.jpg"
        alt=""
        className={styles.banner_menu}
      />
    </div>
    <NavbarMenu />
    {/* <ProductCategories /> */}
  </div>
);

export default Menu;
