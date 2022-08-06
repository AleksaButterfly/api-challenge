import axios from "axios";

// Base API url
//
// Read more: https://www.dekooktips.com/advices/what-is-base-url-in-api.html
const BASE_URL = "https://reqres.in";

export const regresAPI = {
  users: {
    query: (params) => axios.get(`${BASE_URL}/api/users`, { params }),
    show: (id) => axios.get(`${BASE_URL}/api/users/${id}`),
    delete: (id) => axios.delete(`${BASE_URL}/api/users/${id}`)
  }
};
