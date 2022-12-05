import Footer from "../components/global/footer";
import Header from "../components/global/header";

import ShopByCateogry from "../containers/shop-by-category";
import DisplayOffers from "./display-offers";
import RecentBuysNotification from "./display-recent-buy-notification";
import * as CommonConstants from "../common/commonConstants";
import PromoBanners from "./promo-banners";
import DisplayOfferBanner from "./display-offer-banner";
function RenderHomePage() {
  return (
    <>
      <Header />
      <div className="body">
        <DisplayOffers />
        <PromoBanners />
        <ShopByCateogry category={CommonConstants.WOMENS_BAGS_CATEGORY} />
        <ShopByCateogry category={CommonConstants.LAPTOPS_CATEGORY} />
        <RecentBuysNotification />
      </div>
      <Footer />
    </>
  );
}

export default RenderHomePage;
