
import * as CommonConstants from "../../common/commonConstants";
import { updateOrderDataToFirebase } from "../../db/addDataToFirebase";
import { getCartDataFromFirebase } from "../../db/getDataFromFirebase";

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
      let cartData = [];
      const dataFromFirebase = getCartData(state)
      if (dataFromFirebase !== undefined && dataFromFirebase !== "") {
        cartData = dataFromFirebase
      }

      const updatedCartData = checkAndUpdateCart(cartData, action.payload)
      console.log("Existing cart ", cartData)
      console.log("updatedCartData", updatedCartData)
      console.log("action.payload", action.payload)
      window.localStorage.setItem("cartItems", JSON.stringify(updatedCartData))
      console.log("updateOrderDataToFirebase(state.userName, { cart: updatedCartData }) ", updateOrderDataToFirebase(state.userName, { cart: updatedCartData }))
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

async function getCartData(state) {
  return await getCartDataFromFirebase(state.userName)
}

function checkAndUpdateCart(stateData, productDetails) {
  var isNewProduct = true;
  console.log("stateData ", stateData)
  let newCartItems = stateData.map((currItem, idx) => {
    console.log("productDetails ", productDetails.itemDetail)
    console.log("currItem.id ", currItem.id)
    if (productDetails.itemDetail.id === currItem.id) {
      console.log("Product exits. Updating qty.")
      var updateItemsDetails = currItem; updateItemsDetails["quantity"] = 0;
      updateItemsDetails["quantity"] = productDetails.newQuantity;
      isNewProduct = false;
      return updateItemsDetails
    } else {
      return currItem
    }
  })
  if (isNewProduct) {
    console.log("new product")
    var newProductDetails = productDetails.itemDetail;
    console.log("newProductDetails", newProductDetails)
    newProductDetails["quantity"] = 0;
    newProductDetails["quantity"] = productDetails.newQuantity;
    newCartItems.push(newProductDetails)
  }
  return newCartItems
}
export default reducer;
