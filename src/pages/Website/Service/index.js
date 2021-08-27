import React from "react";
import ListService from "./ListService";
import styles from "./service.module.css";

const Service = () => (
  <div>
    <div className={styles.banner}>
      <div className={styles.pop}>
        <div className={styles.vertical}>
          <h1>Dịch vụ</h1>
          <img src="https://jollibee.com.vn/images/popline.svg" alt="" />
          <p className={styles.content_title}>
            TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG JOLLIBEE
          </p>
          <button className={styles.button} type="button">
            Xem Thêm
          </button>
        </div>
      </div>
    </div>
    <ListService />
  </div>
);

export default Service;
