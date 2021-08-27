import React from "react";
import { useSelector } from "react-redux";
import styles from "./listServer.module.css";

const ListService = () => {
  const services = useSelector((state) => state.services);
  return (
    <div>
      {services.services?.map((item) => (
        <div className={styles.service_content} key={item.id}>
          <a href="#">
            <img src={item.image} alt="" />
          </a>
          <div className={styles.service_title}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <a href="" type="submit" className={styles.button}>
              Xem Thêm
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListService;
