import * as CommonConstants from "../common/commonConstants";
import Carousel from "react-bootstrap/Carousel";
function PromoBanners() {
  const promoCarouselItems = CommonConstants.PROMO_BANNERS_JSON.map(
    (promoData, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={promoData.fileName}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{promoData.promoName}</h3>
            <p>{promoData.promoDescription}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
  );
  return <Carousel>{promoCarouselItems}</Carousel>;
}

export default PromoBanners;
