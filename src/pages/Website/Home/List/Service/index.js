import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import styles from "./service.module.css";

const Service = () => {
  const services = useSelector((state) => state.services);
  return (
    <div className={styles.service}>
      <Container>
        <div className={styles.service_title}>
          <h3
            style={{ fontSize: "2.5rem", fontWeight: "700", color: "#ca1133" }}
          >
            DỊCH VỤ
          </h3>
          <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#42210b" }}>
            TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG STEAM
          </h4>
        </div>
        <Row>
          {services.services?.map((item, index) => {
            if (index > 2) {
              return;
            }
            return (
              <Col xs="6" sm="4" key={item.id}>
                <div className={styles.service_entry}>
                  <a href="" className={styles.media}>
                    <img
                      src={item.image}
                      alt=""
                      className={styles.media_image}
                    />
                  </a>
                  <h4 className={styles.media_title}>{item.title}</h4>
                  <a href="#" className={styles.button}>
                    Xem Thêm
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
