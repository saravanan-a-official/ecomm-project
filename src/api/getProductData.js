import axios from "axios";

export async function getAllProducts() {
  const axiosNewsResponse = await axios.get("/products", {});
  return axiosNewsResponse.data;
}

export async function getProductsByCategory(category = "jewellery") {
  const axiosNewsResponse = await axios.get(
    "/products/category/" + category,
    {}
  );
  return axiosNewsResponse.data;
}
