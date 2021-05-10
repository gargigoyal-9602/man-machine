import { headers } from "./helpers";
import { backendv1 } from "../URLConst";

import axios from "axios";

export const post = (endpoint, data) => {
  return axios.post(`${backendv1}${endpoint}`, data, headers);
};
export const put = (endpoint, data) => {
  return axios.put(`${backendv1}${endpoint}`, data, headers);
};
export const get = (endpoint, paramHeader) => {
  return axios.get(`${backendv1}${endpoint}`, paramHeader? paramHeader : headers);
};
export const getProducts = (endpoint, header) => {
  // console.log(header, "headers");
  return axios.get(`${backendv1}${endpoint}`, header);
};
export const putUpdate = (endpoint, data, header) => {
  return axios.put(`${backendv1}${endpoint}`, data, header);
};
export const postUpdate = (endpoint, data, header) => {
  return axios.post(`${backendv1}${endpoint}`, data, header);
};
export const deleteData = (endpoint, header) => {
  return axios.delete(`${backendv1}${endpoint}`, header);
};
// export default post, put ;
// export default apiHelper;
