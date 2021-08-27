import { axiosClient } from "../axiosClient";

const ProductApi = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(products) {
    const url = `/products/`;
    return axiosClient.post(url, products);
  },
  update(id, data) {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  search(searchs) {
    const url = `/products?q=${searchs}`;
    return axiosClient.get(url);
  }
};
export default ProductApi;
