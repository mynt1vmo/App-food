import React, { useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getOrders } from "../../../store/Order/action";

const ListOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orders = useSelector((state) => state.orders);
  const sortOrder = orders.orders.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (id, value, index) => (
        <div>
          <p>{index + 1}</p>
          <p style={{ display: "none" }}>{id}</p>
          <p style={{ display: "none" }}>{value.name}</p>
        </div>
      )
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Điện Thoại",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Chi tiết hóa đơn",
      dataIndex: "id",
      render: (id) => <Link to={`/dashboard/order/${id}/detail`}>Chi tiết</Link>
    },
    {
      title: "Hành động",
      dataIndex: "id",
      render: (id) => (
        <div>
          <Link
            to={`/dashboard/order/${id}/edit`}
            className="btn"
            type="button"
            href=""
            style={{ color: "orange", fontSize: "20px", paddingLeft: "15px" }}
          >
            <BsPencil />
          </Link>
        </div>
      )
    }
  ];
  return (
    <div>
      <h5>Hóa Đơn</h5>
      <Table columns={columns} dataSource={sortOrder} />
    </div>
  );
};

export default ListOrder;
