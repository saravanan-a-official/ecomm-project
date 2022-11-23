import { useDispatch } from "react-redux";
import DisplayProductByCategory from "../components/display-product-by-category";
import { getProductsByCategory } from "../redux/action";
function ShopByCateogry(props) {
  const dispatch = useDispatch();
  dispatch(getProductsByCategory(props.category));
  return <DisplayProductByCategory category={props.category} />;
}

export default ShopByCateogry;
