import axios from "axios";
import { config } from "react-spring";
const Api = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    }
})
// const config = {
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// };

// creating register api
export const registerApi=(data)=> Api.post("/api/user/create",data);
export const loginApi=(data)=> Api.post("/api/user/login",data);
// export const cartpage = (data) => Api.post("/api/user/addtocart,",data);
// export const forgotPassword  = (data) => Api.post("/api/user/forgetpassword", data);

// create prduct api

export const createProductAPI = (formData) =>
  Api.post("/api/product/create_product", formData, config);

export const getAllProductsAPI = () => Api.get("/api/product/get_products");

export const getSingleProductAPI = (id) =>
  Api.get(`/api/product/get_product/${id}`);

export const updateProductAPI = (id, formData) =>
  Api.put(`/api/product/update_product/${id}`, formData, config);

export const deleteProductAPI = (id) =>
  Api.delete(`/api/product/delete_product/${id}`, config);




