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
  let finalResponse = axiosNewsResponse.data;
  finalResponse.category = category;
  return finalResponse;
}
export async function getProductDetails(id = 1) {
  const axiosNewsResponse = await axios.get("/products/" + id, {});
  return axiosNewsResponse.data;
} 
