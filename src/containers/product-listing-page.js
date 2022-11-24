import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllProductsData } from "../redux/action";
import GetAllProductData from "./get-all-product-data";

function ProductListingPage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllProductsData()) });
  return <GetAllProductData />;
}

export default ProductListingPage;
