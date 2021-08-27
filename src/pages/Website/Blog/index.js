import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import styles from "./blog.module.css";

const Blog = () => {
  const blogs = useSelector((state) => state.blogs);
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.pop}>
          <div className={styles.vertical}>
            <h1>Tin Tức </h1>
            <img src="https://jollibee.com.vn/images/popline.svg" alt="" />
            <p className={styles.content_title}>
              TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG JOLLIBEE
            </p>
            <button className={styles.button} type="button">
              Xem Thêm
            </button>
          </div>
        </div>
      </div>
      <section className={styles.broad}>
        <Container>
          <Row>
            {blogs.blogs?.map((item) => (
              <Col xs="6" sm="4" key={item.id}>
                <div className={styles.card_blog}>
                  <a href="#">
                    <img src={item.image} alt="" />
                  </a>
                  <div className={styles.blog_title}>
                    <a href="#">{item.title}</a>
                    <p>{item.content}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
