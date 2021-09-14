import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { message } from "antd";

import NavbarMenu from "./List/NavbarMenu";
import { getProducts } from "../../../store/Product/action";
import styles from "./menu.module.css";
import { addToCart } from "../../../store/Cart/action";
import Banner from "./List/Banner";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [showMessage, setMessage] = useState(true);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const onHandleAddToCart = (item, quantity = 1) => {
    const items = {
      ...item,
      quantity
    };

    dispatch(addToCart(items));
    if (showMessage) {
      message.success({
        content: "Thêm vào giỏ hàng thành công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      setMessage(false);
    }
  };

  return (
    <div>
      <Banner />
      <NavbarMenu />
      <section className={styles.cate_content}>
        <Container>
          <Row>
            {products.products?.map((item) => (
              <Col key={item.id} xs="6" sm="4">
                <div className={styles.card_product}>
                  <Link to={`/detail/${item.id}`} title={item.name}>
                    <img src={item?.image} alt="" className={styles.image} />
                  </Link>
                  <h5 className={styles.item_name}>{item.name}</h5>
                  <p className={styles.item_price}>
                    {item?.price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND"
                    })}
                  </p>
                  <button
                    className={styles.button}
                    type="submit"
                    title="MUA HÀNG"
                    onClick={() => onHandleAddToCart(item)}
                  >
                    Mua hàng
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Menu;
