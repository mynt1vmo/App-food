import axios from "axios";
import { localUser } from "../localStorage";

const infoUser = localUser?.get();

const axiosClient = axios.create({
  baseURL: infoUser?.payload?.user?.id
    ? ` http://localhost:5005/660/${infoUser?.payload?.user?.id}`
    : "http://localhost:5005",
  headers: {
    "Content-Type": "application/json",
    Authorization: infoUser?.payload?.user?.id
      ? `Bearer ${infoUser?.payload?.accessToken} `
      : ""
  }
});
export { axiosClient };
