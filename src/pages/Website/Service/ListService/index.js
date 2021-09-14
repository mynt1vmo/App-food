import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./listServer.module.css";
import { getServices } from "../../../../store/Service/action";

const ListService = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(getServices());
  }, []);
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
