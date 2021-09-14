import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import OrderApi from "../../../apis/OrderApi";
import { getCategories } from "../../../store/Category/action";

const DetailOrders = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [orderDetail, setOrders] = useState();
  const categories = useSelector((state) => state.categories);
  useEffect(async () => {
    try {
      const { data } = await OrderApi.get(id);
      setOrders(data.detail);
    } catch (error) {
      return error;
    }
    dispatch(getCategories());
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
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
      render: (price) => <p>{price}đồng</p>
    },
    {
      title: "Mổ tả",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} alt="" width="150px" />
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId) => (
        <p>
          {
            categories.categories.find(
              (item) => Number(item.id) === Number(categoryId)
            )?.name
          }
        </p>
      )
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity"
    }
  ];
  return (
    <div>
      <h5>Chi tiết hóa đơn</h5>
      <Table columns={columns} dataSource={orderDetail} />
    </div>
  );
};

export default DetailOrders;
