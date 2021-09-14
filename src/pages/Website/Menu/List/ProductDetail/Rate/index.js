import React, { useEffect, useState } from "react";
import { Rate, message, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./rate.module.css";
import { addComment, getComment } from "../../../../../../store/Comment/action";

const Rates = () => {
  const { id } = useParams();
  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Rất tốt"];
  const [stars, setStars] = useState(3);
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment);
  const handleChange = (value) => {
    setStars(value);
  };
  const onHandleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };
  useEffect(() => {
    dispatch(getComment());
  }, []);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (content.length < 1) {
      message.error({
        content: "Bạn không được để trống",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      setLoading(false);
      return;
    }
    const rate = {
      star: stars,
      title: content,
      approval: false,
      productId: Number(id)
    };
    dispatch(addComment(rate));
    setTimeout(() => {
      setLoading(false);
      message.success({
        content: "Bạn đã bình luận. Bạn đợi bình luận được phê duyệt",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      setContent("");
    }, 800);
  };
  return (
    <div>
      <h5> Đánh Giá </h5>{" "}
      <Spin spinning={isLoading} delay={500}>
        <div style={{ marginBottom: "20px" }}>
          {comment.comment.map((item) => {
            if (
              Number(item.productId) === Number(id) &&
              item.approval === true
            ) {
              return (
                <div key={item.id}>
                  <Rate value={item.star} />
                  <p>{item.title}</p>
                </div>
              );
            }
            return "";
          })}
        </div>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <span>
            <Rate tooltips={desc} onChange={handleChange} value={stars} />{" "}
            {stars ? (
              <span className="ant-rate-text"> {desc[stars - 1]} </span>
            ) : (
              ""
            )}
          </span>
          <br />
          <input
            className="mt-2"
            type="text"
            placeholder="Đánh giá ..."
            value={content}
            onChange={onHandleChange}
          />
          <button type="submit" className={styles.button}>
            Đánh Giá
          </button>
        </form>
      </Spin>
    </div>
  );
};

export default Rates;
