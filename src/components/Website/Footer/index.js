import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Row className="py-5">
        <Col>
          <div>
            <a href="/">
              <img src="./assets/image/logo-white.png" alt="" />
            </a>
          </div>
        </Col>
        <Col>
          <div>
            <p>
              Địa chỉ: Lầu 5, tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu,
              Quận 3, Tp. Hồ Chí Minh, Việt Nam
            </p>
            <p>
              Tổng đài : <a href="/"> 1900-1533</a>
            </p>
            <p>
              Hộp thư góp ý: <a href="">jbvnfeedback@thechicken.com.vn</a>
            </p>
            <p>
              Hoặc gửi phản hồi tại <a href="/">ĐÂY</a>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <div className="contact">
              <a href="">
                <img
                  src="https://jollibee.com.vn/images/home/delivery-lg.png"
                  alt=""
                />
              </a>
            </div>
            <p className="pt-5">
              <a href="/">Chính sách và quy định chung</a>
              <a href="/" className="mx-2">
                Chính sách hoạt động
              </a>
              <a href="/" className="mx-2">
                Liên hệ
              </a>
              <a href="/">Chính sách bảo mật thông tin</a>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.footer_icon}>
            <h5>HÃY KẾT NỐI VỚI CHÚNG TÔI</h5>
            <a href="" className="my-5">
              <FaFacebookF />
            </a>
            <a href="" className="my-5">
              <BsChatQuote />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
