import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./contact.module.css";

const Contact = () => (
  <div className={styles.contact}>
    <h1>Liên Hệ</h1>
    <section>
      <Container>
        <Row>
          <Col>
            <h3 className={styles.title}>THÔNG TIN LIÊN HỆ</h3>
            <p className={styles.contact_title}>
              Lầu 5 – Tòa Nhà SCIC, 16 Trương Định, P.6, Q.3, TP.HCM
            </p>
          </Col>
          <Col>
            <h3 className={styles.title}>GỬI TIN NHẮN CHO CHÚNG TÔI</h3>
            <form>
              <div className={styles.form_group}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="Tên"
                />

                <input
                  className={styles.form_input}
                  type="text"
                  placeholder="Số điện thoại"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className={styles.email}
              />
              <textarea className={styles.textarea} cols="30" rows="10">
                Nội dung
              </textarea>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default Contact;
