import * as CommonConstants from "../../common/commonConstants";

export function getAllProductsData() {
  return { type: CommonConstants.LOAD_ALL_PRODUCTS };
}

export function getProductsByCategory(category) {
  return { type: CommonConstants.LOAD_PRODS_BY_CATEGORY, payload: category };
}

export function getProductDetails(id) {
  return { type: CommonConstants.LOAD_PRODUCT_DETAILS, payload: id };
}
