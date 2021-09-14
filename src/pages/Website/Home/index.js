import React from "react";

import Banner from "./List/Banner";
import Category from "./List/Category";
import Service from "./List/Service";
import styles from "./home.module.css";
import Blog from "./List/Blog";

const Home = () => (
  <div>
    <Banner />
    <Category />
    <Service />
    <div className={styles.intro_content}>
      <h3 className={styles.title}>STEAM, XIN CHÀO</h3>
      <p className={styles.title_content}>
        Chúng tôi là STEAM Việt Nam với hơn 100 cửa hàng trên khắp cả nước,
        chúng tôi mong muốn đem đến niềm vui ẩm thực cho mọi gia đình Việt bằng
        những món ăn có chất lượng tốt, hương vị tuyệt hảo, dịch vụ chu đáo với
        một mức giá hợp lý… Hãy đến và thưởng thức nhé!
      </p>
      <a className={styles.button} href="">
        Mua hàng
      </a>
    </div>
    <Blog />
  </div>
);

export default Home;
