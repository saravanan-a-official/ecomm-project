import "../styles/App.css";
import HomePage from "./home-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListingPage from "./product-listing-page";
import ViewCartItems from "./view-cart-items";
import ViewProductDetails from "./view-product-details";
import ShopByCateogry from "./shop-by-category";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/view-all-products/" element={<ProductListingPage />} />
        <Route path="/view-cart/" element={<ViewCartItems />} />
        <Route path="/view-product-details/:id" element={<ViewProductDetails />} />
        <Route path="/shop-products-by-categories/" element={<ShopByCateogry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
