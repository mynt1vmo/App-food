import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "./search.module.css";
import ProductApi from "../../../apis/ProductsApi";
import Banner from "../Menu/List/Banner";
import NavbarMenu from "../Menu/List/NavbarMenu";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Search = () => {
  const [searchs, setSearchs] = useState();
  const query = useQuery();
  useEffect(async () => {
    const { data } = await ProductApi.search(query.get("q"));
    setSearchs(data);
  }, [query]);
  return (
    <div>
      <Banner />
      <NavbarMenu />
      <div className={styles.cate_content}>
        <Container>
          <Row>
            {searchs?.length > 0 ? (
              searchs.map((item) => (
                <Col key={item.id} xs="6" sm="4">
                  <div className={styles.card_product}>
                    <Link to={`/detail/${item.id}`} title={item.name}>
                      <img src={item.image} alt="" className={styles.image} />
                    </Link>
                    <h5 className={styles.item_name}>{item.name}</h5>
                    <p className={styles.item_price}>{item?.price}đ</p>
                    <button className={styles.button} type="submit">
                      Mua hàng
                    </button>
                  </div>
                </Col>
              ))
            ) : (
              <h5 className="text-center py-5">
                Không tìm thấy kết quả tìm kiếm{" "}
              </h5>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Search;
