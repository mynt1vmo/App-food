import { axiosClient } from "../axiosClient";

const UserApi = {
  getAll() {
    const url = `/users`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  add(user) {
    const url = `/users`;
    return axiosClient.post(url, user);
  },
  update(id, data) {
    const url = `/users/${id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
  login(user) {
    const url = `/login`;
    return axiosClient.post(url, user);
  }
};
export default UserApi;
