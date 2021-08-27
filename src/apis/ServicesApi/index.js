import { axiosClient } from "../axiosClient";

const ServicesApi = {
  getAll() {
    const url = `/services`;
    return axiosClient.get(url);
  }
};
export default ServicesApi;
