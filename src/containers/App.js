import "../styles/App.css";
import HomePage from "./home-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListingPage from "./product-listing-page";
import ViewCartItems from "./view-cart-items";
import ViewProductDetails from "./view-product-details";
import ShopByCateogry from "./shop-by-category";
import PrivacyPolicy from "../components/global/footer/privacy-policy"
import About from "../components/global/footer/about"
import Cookies from "../components/global/footer/cookies"
import Feedback from "../components/global/footer/feedback"
import ContactUs from "../components/global/footer/contact-us"
import PaymentPage from "./payment-page";
import Upi from "../components/payment-options/upi";
import CreditDebitCart from "../components/payment-options/credit-debit-card";
import NetBanking from "../components/payment-options/net-banking";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/view-all-products/" element={<ProductListingPage />} />
        <Route path="/view-cart/" element={<ViewCartItems />} />
        <Route path="/view-product-details/:id" element={<ViewProductDetails />} />
        <Route path="/shop-products-by-categories" element={<ShopByCateogry />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
