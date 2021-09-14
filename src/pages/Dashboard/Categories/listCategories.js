import { message, Table } from "antd";
import React, { useEffect } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCategories, removeCategory } from "../../../store/Category/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { PATH_ADD_CATEGORY } from "../../../routes/Routes/routes.path";

const ListCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector((state) => state.categories);
  const sortCategories = categories.categories.sort(
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
      title: "Hình ảnh",
      dataIndex: "image1",
      key: "image1",
      render: (img1) => <img src={img1} alt="" width="150px" />
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
          </button>{" "}
          <Link
            to={`/dashboard/category/${id}`}
            className="btn"
            type="button"
            href=""
            style={{ color: "orange", fontSize: "20px", paddingLeft: "15px" }}
          >
            <BsPencil />
          </Link>{" "}
        </div>
      )
    }
  ];
  const RemoveItem = (id) => {
    const xacnhan = window.confirm("Bạn xác nhận muốn xóa");
    if (xacnhan) {
      dispatch(removeCategory(Number(id)));
      dispatch(showSpinning());
      setTimeout(() => {
        message.success({
          content: "Xóa danh mục thành công",
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
        <h5> Danh mục </h5>
        <Link
          style={{ background: "#1890FF", padding: "10px ", color: "white" }}
          to={PATH_ADD_CATEGORY}
        >
          Thêm danh mục
        </Link>
      </div>
      <Table columns={columns} dataSource={sortCategories} />
    </div>
  );
};

export default ListCategory;
