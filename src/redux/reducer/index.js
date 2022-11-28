
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

    case CommonConstants.ADD_TO_CART:
      return { ...state, isLoading: true };

    case CommonConstants.ADD_TO_CART_OK:
      let cartData = []
      if (window.localStorage.getItem("cartItems") !== undefined) {
        cartData = JSON.parse(window.localStorage.getItem("cartItems"))
      }
      const updatedCartData = checkAndUpdateCart(cartData, action.payload)
      console.log("Existing cart ", cartData)
      console.log("updatedCartData", updatedCartData)
      console.log("action.payload", action.payload)
      window.localStorage.setItem("cartItems", JSON.stringify(updatedCartData))
      return { ...state, cart: updatedCartData, isLoading: false };

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

function checkAndUpdateCart(stateData, productDetails) {
  var isNewProduct = true;
  let newCartItems = stateData.map((currItem, idx) => {
    if (productDetails.id === currItem.id) {
      console.log("Product exits. Updating qty.")
      let updateItemsDetails = currItem;
      updateItemsDetails.quantity = productDetails.newQuantity;
      isNewProduct = false;
      return updateItemsDetails
    } else {
      return currItem
    }
  })
  if (isNewProduct) {
    console.log("new product")
    let newProductDetails = productDetails.itemDetail;
    newProductDetails.quantity = productDetails.newQuantity;
    newCartItems.push(newProductDetails)
  }
  return newCartItems
}
export default reducer;
