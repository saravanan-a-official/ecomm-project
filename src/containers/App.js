import "../styles/App.css";
import HomePage from "./home-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListingPage from "./product-listing-page";
import ViewCartItems from "./view-cart-items";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/view-all-products/" element={<ProductListingPage />} />
        <Route path="/view-cart/" element={<ViewCartItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
