import { useSelector } from "react-redux";
import DisplayProductTiles from "./display-product-tiles";
import Header from "./global/header";
import Footer from "./global/footer";
import SpinnerComponent from "./spinner-component";

function DisplayAllProducts() {
  const allProductsData = useSelector((state) => state);
  const productDetailsData = (
    <div className="body product-listing-page App">
      <h1>Product Listing Page</h1>
      <div className="card-group">
        <DisplayProductTiles allProductsData={allProductsData.allProducts} />
      </div>
    </div>
  );
  return (
    <>
      <Header />
      <div className="display-all-products App">
        {allProductsData.allProducts.length > 0 ? productDetailsData : <SpinnerComponent />}
      </div>
      <Footer />
    </>
  );
}

export default DisplayAllProducts;
