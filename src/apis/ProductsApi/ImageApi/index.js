import { axiosClient } from "../../axiosClient";

const ImageApi = {
  getAll() {
    const url = `/productsImage`;
    return axiosClient.get(url);
  }
};
export default ImageApi;
