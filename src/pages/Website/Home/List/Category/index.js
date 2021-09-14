import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./category.module.css";
import { getCategories } from "../../../../../store/Category/action";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.menu_text}>
            <div className={styles.logo_wrapper}>
              <img
                src="https://www.spheretheme.com/html/steam/assets/images/logo/logo-white.png"
                alt=""
              />
            </div>
            <h3 className={styles.text_uppercase}>
              ĂN GÌ
              <br /> HÔM NAY
            </h3>
            <p>
              Thực đơn Steam đa dạng và phong phú, có rất nhiều sự lựa chọn cho
              bạn, gia đình và bạn bè.
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
                  <Link
                    to={{ pathname: `/category/${item.id}` }}
                    className={styles.item}
                  >
                    <img src={item.image1} alt="" className={styles.image} />
                  </Link>
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
