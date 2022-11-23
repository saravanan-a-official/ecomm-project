import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = {
    type: CommonConstants.LOAD_ALL_PRODUCTS,
  }
) => {
  switch (action.type) {
    case CommonConstants.LOAD_ALL_PRODUCTS:
      return { ...state, isLoading: true };
    case CommonConstants.GET_ALL_PRODUCTS_OK:
      return { ...state, allProducts: action.payload.products, isLoading: false };

    case CommonConstants.LOAD_PRODUCT_DETAILS:
      return { ...state, isLoading: true };
    case CommonConstants.GET_PRODUCT_DETAILS_OK:
      return { ...state, productDetails: action.payload, isLoading: false };
    case CommonConstants.LOAD_PRODS_BY_CATEGORY:
      return { ...state, isLoading: true };
    case CommonConstants.GET_PRODS_BY_CATEGORY_OK:
      const category = action.payload.category;
      const productsByCategoryUpdated = state.productsByCategory;
      productsByCategoryUpdated[category] = action.payload;
      return {
        ...state,
        productsByCategory: productsByCategoryUpdated,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
