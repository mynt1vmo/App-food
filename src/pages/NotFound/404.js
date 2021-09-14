import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../../routes/Routes/routes.path";

const Error404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
    extra={<Link to={PATH_HOME}>Trở lại trang chủ</Link>}
  />
);

export default Error404;
