import { axiosClient } from "../axiosClient";

const CommentApi = {
  getAll() {
    const url = `/comments`;
    return axiosClient.get(url);
  },
  add(comment) {
    const url = `/comments/`;
    return axiosClient.post(url, comment);
  },
  remove(id) {
    const url = `/comments/${id}`;
    return axiosClient.delete(url);
  },
  update(id, data) {
    const url = `/comments/${id}`;
    return axiosClient.put(url, data);
  }
};

export default CommentApi;
