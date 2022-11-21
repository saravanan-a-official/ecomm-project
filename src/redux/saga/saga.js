import { call, put, takeLatest, all } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/getProductData";

function* getNewsDataWatcher() {
  yield all([
    takeLatest(CommonConstants.LOAD_ALL_PRODUCTS, pushAllProductsToStore),
    takeLatest(
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

export default getNewsDataWatcher;
