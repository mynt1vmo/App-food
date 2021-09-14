import { axiosClient } from "../axiosClient";

const OrderApi = {
  getAll() {
    const url = `/orders`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },
  add(order) {
    const url = `/orders/`;
    return axiosClient.post(url, order);
  },
  edit(id, order) {
    const url = `/orders/${id}`;
    return axiosClient.put(url, order);
  }
};

export default OrderApi;
