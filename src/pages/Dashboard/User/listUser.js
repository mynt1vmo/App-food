import { message, Table } from "antd";
import React, { useEffect } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { listUser, removeUser } from "../../../store/User/action";
import { PATH_ADD_USER } from "../../../routes/Routes/routes.path";

const ListUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser());
  }, []);
  const users = useSelector((state) => state.users);
  const sortUsers = users.users.sort(
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
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (address) => (
        <p
          style={{ width: "100%", whiteSpace: "pre-wrap", overflow: "hidden" }}
        >
          {address}
        </p>
      )
    },
    {
      title: "Quyền ",
      dataIndex: "role",
      key: "role",
      render: (role) => <p>{Number(role) === 1 ? "Khách hàng" : "Quản trị"}</p>
    },
    {
      title: "Hành động",
      dataIndex: "id",
      render: (id) => (
        <div>
          <button
            className="btn "
            type="button"
            href=""
            style={{ color: "red", fontSize: "20px", border: "none" }}
            onClick={() => RemoveItem(id)}
          >
            <BsTrash />
          </button>
          <Link
            to={`/dashboard/user/${id}/edit`}
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
  const RemoveItem = (id) => {
    const xacnhan = window.confirm("Bạn xác nhận muốn xóa");
    if (xacnhan) {
      dispatch(removeUser(Number(id)));
      dispatch(showSpinning());
      setTimeout(() => {
        message.success({
          content: "Xóa tài khoản thành công",
          className: "custom-class",
          style: {
            marginTop: "20vh"
          }
        });
        dispatch(hiddenSpinning());
      }, 1000);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between py-2">
        <h5> Tài khoản </h5>
        <Link
          style={{
            background: "#1890FF",
            padding: "10px ",
            color: "white"
          }}
          to={PATH_ADD_USER}
        >
          Thêm tài khoản
        </Link>
      </div>
      <Table columns={columns} dataSource={sortUsers} />
    </div>
  );
};

export default ListUser;
