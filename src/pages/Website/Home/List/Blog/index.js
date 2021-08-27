import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getBlogs } from "../../../../../store/Blog/action";
import styles from "./blog.module.css";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      <h3 className={styles.title}>Tin Tức </h3>
      <Row>
        {blogs.blogs?.map((item) => (
          <Col key={item.id}>
            <div className={styles.card_blog}>
              <a href="#">
                <img src={item.image} alt="" className={styles.blog_image} />
              </a>
            </div>
          </Col>
        ))}
      </Row>
      <div className={styles.button_info}>
        <a href="#" className={styles.button}>
          Xem Thêm
        </a>
      </div>
    </Container>
  );
};

export default Blog;
