import { message, Table } from "antd";
import React, { useEffect } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getProducts, removeProduct } from "../../../store/Product/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { PATH_ADD_PRODUCT } from "../../../routes/Routes/routes.path";

const ListProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector((state) => state.products);
  const sortProduct = products.products.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (id, value, index) => (
        <div>
          <p> {index + 1} </p> <p style={{ display: "none" }}> {id} </p>{" "}
          <p style={{ display: "none" }}> {value.name} </p>{" "}
        </div>
      )
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <p>
          {" "}
          {price}
          đồng{" "}
        </p>
      )
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (img) => <img src={img} alt="" width="150px" />
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
            to={`/dashboard/product/${id}`}
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
      dispatch(removeProduct(Number(id)));
      dispatch(showSpinning());
      setTimeout(() => {
        message.success({
          content: "Xóa sản phẩm thành công",
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
        <h5> Sản phẩm </h5>{" "}
        <Link
          to={PATH_ADD_PRODUCT}
          style={{ background: "#1890FF", padding: "10px ", color: "white" }}
        >
          Thêm Sản phẩm{" "}
        </Link>{" "}
      </div>{" "}
      <Table columns={columns} dataSource={sortProduct} />{" "}
    </div>
  );
};

export default ListProduct;
