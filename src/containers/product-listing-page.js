import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DisplayAllProducts from "../components/display-all-products";

import { getAllProductsData } from "../redux/action";
function ProductListingPage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllProductsData()) });
  return <DisplayAllProducts />;
}

export default ProductListingPage;
