import { Result } from "antd";

import React from "react";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../../routes/Routes/routes.path";

const Error403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="Xin lỗi, bạn không được phép truy cập trang này."
    extra={<Link to={PATH_HOME}>Trở lại trang chủ</Link>}
  />
);

export default Error403;
