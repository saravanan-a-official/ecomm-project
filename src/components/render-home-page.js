import Footer from "../components/global/footer";
import Header from "../components/global/header";

import ShopByCateogry from "../containers/shop-by-category";
import DisplayOffers from "./display-offers";
import RecentBuysNotification from "./display-recent-buy-notification";
import * as CommonConstants from "../common/commonConstants";
import PromoBanners from "./promo-banners";
import { Link } from "react-router-dom";
function RenderHomePage() {
  return (
    <>
      <Header />
      <DisplayOffers />
      <PromoBanners />
      <ShopByCateogry category={CommonConstants.JEWELLERY_CATEGORY} />
      <ShopByCateogry category={CommonConstants.ELECTRONICS_CATEGORY} />
      <RecentBuysNotification />
      <Link to="/view-all-products/">View All Products</Link>
      <Footer />
    </>
  );
}

export default RenderHomePage;
