import React from "react";

import styles from "./success.module.css";

const CheckOutSuccess = () => (
  <article>
    <h1 className={styles.thanks}>CẢM ƠN</h1>
    <center>
      <div className={styles.message}>
        <div className={styles.announce}>
          <div className={styles.text}>
            Cảm ơn bạn đã đặt hàng tại Steam, <br />
            bạn sẽ nhận được tin nhắn xác nhận <br />
            trong vòng ít phút nữa!
          </div>
          <div className={styles.bee}>
            <img
              src="https://jollibee.com.vn/images/thankyou/bee.png"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    </center>
  </article>
);

export default CheckOutSuccess;
