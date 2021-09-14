import { axiosClient } from "../../axiosClient";

const ImageApi = {
  getAll() {
    const url = `/categoriesImage`;
    return axiosClient.get(url);
  }
};
export default ImageApi;
