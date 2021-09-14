import { message, Rate, Switch, Table } from "antd";
import React, { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  editApproval,
  getComment,
  removeComment
} from "../../../store/Comment/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";

const ListComment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment());
  }, []);
  const comment = useSelector((state) => state.comment);
  const onChangeApproval = (item) => {
    const comfirm = window.confirm("Bạn chắc chắn muốn phê duyệt");
    if (comfirm) {
      dispatch(editApproval(item));
    }
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (id, value, index) => (
        <div>
          <p>{index + 1}</p>
          <p style={{ display: "none" }}>{id}</p>
          <p style={{ display: "none" }}>{value?.name}</p>
        </div>
      )
    },
    {
      title: "Đánh giá",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Sao",
      dataIndex: "star",
      key: "star",
      render: (value) => <Rate disabled defaultValue={value} />
    },
    {
      title: "Phê duyệt",
      dataIndex: [],
      render: (item) => (
        <Switch
          checked={item.approval}
          onChange={() => onChangeApproval(item)}
        />
      )
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
        </div>
      )
    }
  ];
  const RemoveItem = (id) => {
    const xacnhan = window.confirm("Bạn xác nhận muốn xóa?");
    if (xacnhan) {
      dispatch(removeComment(Number(id)));
      dispatch(showSpinning());
      setTimeout(() => {
        message.success({
          content: "Xóa bình luận  thành công",
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
      <h5> Bình Luận </h5>{" "}
      <Table columns={columns} dataSource={comment.comment} />{" "}
    </div>
  );
};

export default ListComment;
