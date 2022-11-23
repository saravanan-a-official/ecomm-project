import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import DisplayProductByCategory from "../components/display-product-by-category";
import { getProductsByCategory } from "../redux/action";
function ShopByCateogry(props) {
  const dispatch = useDispatch();
  console.log("useLocation() ", useLocation())
  console.log("props " + props.category)
  useEffect(() => { dispatch(getProductsByCategory(props)); })
  return <DisplayProductByCategory category={props.category} />;
}

export default ShopByCateogry;
