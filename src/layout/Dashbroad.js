import React from "react";
import { Layout } from "antd";

import Sidebar from "../components/DashBoard/sidebar";

const { Header, Content, Footer } = Layout;

const Dashbroad = ({ children }) => (
  <Layout style={{ minHeight: "100vh" }} className="flex-row">
    <Sidebar />
    <Layout className="site-layout flex-column">
      <Header style={{ padding: 0, background: "white" }} />
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default Dashbroad;
