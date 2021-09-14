import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

import styles from "./navbar.module.css";
import { getCategories } from "../../../../../store/Category/action";

const NavbarMenu = () => {
  const [texSearch, setTextSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  function onSearch(e) {
    e.preventDefault();

    history.push(`/search?q=${texSearch}`);
  }
  return (
    <div>
      <ul className={styles.navbar_menu}>
        {categories.categories?.map((item) => (
          <li key={item.id}>
            <NavLink
              activeClassName={styles.nav_item}
              to={{ pathname: `/category/${item.id}` }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <form className={styles.search} onSubmit={onSearch}>
        <input
          type="text"
          value={texSearch}
          placeholder="Tìm kiếm tại đây..."
          className="px-4"
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
      </form>
    </div>
  );
};

export default NavbarMenu;
