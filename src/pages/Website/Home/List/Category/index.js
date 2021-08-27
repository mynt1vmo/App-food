import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import styles from "./category.module.css";

const Category = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.menu_text}>
            <div className={styles.logo_wrapper}>
              <img src="https://jollibee.com.vn/images/logo.png" alt="" />
            </div>
            <h3 className={styles.text_uppercase}>
              ĂN GÌ
              <br /> HÔM NAY
            </h3>
            <p>
              Thực đơn Jollibee đa dạng và phong phú, có rất nhiều sự lựa chọn
              cho bạn, gia đình và bạn bè.
            </p>
          </div>
        </Col>
        {categories.categories?.map((item, index) => {
          if (index > 2) {
            return;
          }
          return (
            <Col key={item.id}>
              <div className={styles.card_category}>
                <div className={styles.swiper_wrapper}>
                  <a href="/" className={styles.item}>
                    <img src={item.image1} alt="" className={styles.image} />
                  </a>
                  <div className={styles.content_card}>
                    <img src={item.image2} alt="" />
                    <button
                      type="button"
                      style={{ marginTop: "50px" }}
                      className={styles.btn_orange}
                    >
                      MUA HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
