import { call, put, takeLatest, all, takeEvery } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/getProductData";

function* getNewsDataWatcher() {
  yield all([
    takeLatest(CommonConstants.LOAD_ALL_PRODUCTS, pushAllProductsToStore),
    takeLatest(CommonConstants.LOAD_PRODUCT_DETAILS, pushProductToStore),
    takeEvery(CommonConstants.ADD_TO_CART, pushProductToCart),
    takeEvery(
      CommonConstants.LOAD_PRODS_BY_CATEGORY,
      pushCategoryProductsToStore
    ),
  ]);
}

function* pushAllProductsToStore(action) {
  const allproductsData = yield call(api.getAllProducts, "");
  yield put({
    type: CommonConstants.GET_ALL_PRODUCTS_OK,
    payload: allproductsData,
  });
}

function* pushCategoryProductsToStore(action) {
  const categoryProducts = yield call(
    api.getProductsByCategory,
    action.payload
  );
  yield put({
    type: CommonConstants.GET_PRODS_BY_CATEGORY_OK,
    payload: categoryProducts,
  });
}

function* pushProductToStore(action) {
  const productDetails = yield call(
    api.getProductDetails,
    action.payload
  );
  yield put({
    type: CommonConstants.GET_PRODUCT_DETAILS_OK,
    payload: productDetails,
  });
}
function* pushProductToCart(action) {

  yield put({
    type: CommonConstants.ADD_TO_CART_OK,
    payload: action.payload,
  });
}

export default getNewsDataWatcher;
