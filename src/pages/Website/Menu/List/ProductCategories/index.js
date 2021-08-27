import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import styles from "./category.module.css";

const ProductCategories = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const filterProduct = products.products?.filter(
    (item) => item.categoryId === id
  );

  return (
    <div className={styles.cate_content}>
      <Container>
        <Row>
          {filterProduct?.map((item) => (
            <Col key={item.id} xs="6" sm="4">
              <div className={styles.card_product}>
                <Link to={`/product/detail/${item.id}`}>
                  <img src={item.image} alt="" className={styles.image} />
                </Link>
                <h5 className={styles.item_name}>{item.name}</h5>
                <p className={styles.item_price}>{item.price.toFixed(1)}đ</p>
                <button className={styles.button} type="submit">
                  Mua hàng
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategories;
