import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import DisplayProductByCategory from "../components/display-product-by-category";
import { getProductsByCategory } from "../redux/action";
import * as CommonConstants from "../common/commonConstants"
function ShopByCateogry(props) {
  const dispatch = useDispatch();
  const categoryFromLink = useLocation().state?.category;
  let category = "laptops";
  let pageName = null;
  if (props.category !== undefined) {
    category = props.category;
    pageName = CommonConstants.HOME_PAGE
  } else if (categoryFromLink !== undefined) {
    category = categoryFromLink

  }
  console.log("category is", category)
  useEffect(() => { dispatch(getProductsByCategory(category)); })
  return <DisplayProductByCategory category={category} pageName={pageName} />;
}

export default ShopByCateogry;
