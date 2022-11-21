import { useSelector } from "react-redux";
import DisplayProductTiles from "../components/display-product-tiles";
import Header from "../components/global/header";
import Footer from "../components/global/footer";

function ProductListingPage() {
  const allProductsData = useSelector((state) => state);
  return (
    <>
      {" "}
      <Header />
      <div className="product-listing-page App">
        <h1>Product Listing Page</h1>
        <div className="card-group">
          <DisplayProductTiles allProductsData={allProductsData.allProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductListingPage;
