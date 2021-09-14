import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import styles from "./category.module.css";
import Banner from "../Banner";
import NavbarMenu from "../NavbarMenu";

const ProductCategories = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const filterProduct = products.products?.filter(
    (item) => item.categoryId === Number(id)
  );

  return (
    <div>
      <Banner />
      <NavbarMenu />
      <div className={styles.cate_content}>
        <Container>
          <Row>
            {filterProduct.length > 0 ? (
              filterProduct.map((item) => (
                <Col key={item.id} xs="6" sm="4">
                  <div className={styles.card_product}>
                    <Link to={`/detail/${item.id}`} title={item.name}>
                      <img src={item.image} alt="" className={styles.image} />
                    </Link>
                    <h5 className={styles.item_name}>{item.name}</h5>
                    <p className={styles.item_price}>
                      {item?.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND"
                      })}
                    </p>
                    <button className={styles.button} type="submit">
                      Mua hàng
                    </button>
                  </div>
                </Col>
              ))
            ) : (
              <h5 style={{ margin: "30px 0", textAlign: "center" }}>
                Không có sản phẩm nào trong danh mục
              </h5>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductCategories;
