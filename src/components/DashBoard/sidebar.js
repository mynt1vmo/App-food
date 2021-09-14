import React, { useState } from "react";
import {
  ImportOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
  ExceptionOutlined,
  UngroupOutlined,
  ScheduleOutlined,
  AppstoreOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Sider from "antd/lib/layout/Sider";
import {
  PATH_DASHBROAD_CATEGORY,
  PATH_DASHBROAD_COMMENT,
  PATH_DASHBROAD_ORDER,
  PATH_DASHBROAD_PRODUCT,
  PATH_DASHBROAD_USER,
  PATH_HOME
} from "../../routes/Routes/routes.path";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
      <Menu theme="dark" mode="inline">
        <Menu.Item
          key="1"
          style={{ marginTop: "65px" }}
          icon={<AppstoreOutlined />}
        >
          <Link to="/dashboard">Quản lý </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          <Link to={PATH_DASHBROAD_CATEGORY}>Danh mục </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UngroupOutlined />}>
          <Link to={PATH_DASHBROAD_PRODUCT}>Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ExceptionOutlined />}>
          <Link to={PATH_DASHBROAD_ORDER}>Hóa đơn</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
          <Link to={PATH_DASHBROAD_USER}>User</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ScheduleOutlined />}>
          <Link to={PATH_DASHBROAD_COMMENT}>Đánh giá</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<ImportOutlined />}>
          <Link to={PATH_HOME}>Quay về trang chủ</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
