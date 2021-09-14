import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { message } from "antd";
import Rates from "./Rate";

import ProductApi from "../../../../../apis/ProductsApi";
import { getCategories } from "../../../../../store/Category/action";
import { getProducts } from "../../../../../store/Product/action";
import Banner from "../Banner";
import styles from "./detail.module.css";
import { addToCart } from "../../../../../store/Cart/action";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  useEffect(async () => {
    try {
      const { data: item } = await ProductApi.get(id);
      setProduct(item);
    } catch (error) {
      return error;
    }
  }, []);
  const filterProducts = products.products.filter(
    (item) => item.categoryId === product?.categoryId
  );
  const onHandle = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };
  const onHandleAddToCart = (item) => {
    const items = {
      ...item,
      quantity: Number(quantity)
    };
    dispatch(addToCart(items));
    message.success({
      content: "Thêm vào giỏ hàng thành công",
      className: "custom-class",
      style: {
        marginTop: "20vh"
      }
    });
  };
  return (
    <div>
      <Banner />
      <div className={styles.detail_product}>
        <section className="detail content">
          <Container>
            <Row>
              <Col>
                <img
                  className={styles.image}
                  src={product?.image}
                  alt=""
                  title={product?.name}
                />
              </Col>
              <Col className={styles.title_content}>
                <div>
                  <h5 className={styles.title}>{product?.name}</h5>
                  <p className={styles.price}>Giá :{product?.price}đ</p>
                  <p className={styles.description}>
                    Mô tả : {product?.description}
                  </p>
                  <p>
                    Category :
                    {
                      categories.categories.find(
                        (item) => item.id === product?.categoryId
                      )?.name
                    }
                  </p>
                  <p>
                    Số lượng :
                    <input
                      type="number"
                      value={quantity}
                      className={styles.input}
                      onChange={onHandle}
                    />
                  </p>
                  <button
                    type="submit"
                    className={styles.button}
                    onClick={() => onHandleAddToCart(product)}
                  >
                    Mua Hàng
                  </button>
                </div>
              </Col>
            </Row>
            <div className={styles.evaluate}>
              <Rates />
            </div>
            <div className={styles.related_products}>
              <h5 className={styles.related_products_title}>
                Sản phẩm liên quan
              </h5>
              <Row>
                {filterProducts.map((item, index) => {
                  if (index > 2) {
                    return;
                  }
                  return (
                    <Col key={item.id} xs="6" sm="4">
                      <div className={styles.card_product}>
                        <Link to={`/detail/${item.id}`} title={item.name}>
                          <img
                            src={item.image}
                            alt=""
                            className={styles.item_image}
                          />
                        </Link>
                        <p className={styles.item_name}>{item.name}</p>
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
                  );
                })}
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
