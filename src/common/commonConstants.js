export const API_BASE_URL = "https://fakestoreapi.com/";
export const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_OK = "GET_ALL_PRODUCTS_OK";
export const LOAD_PRODS_BY_CATEGORY = "LOAD_PRODS_BY_CATEGORY";
export const GET_PRODS_BY_CATEGORY_OK = "GET_PRODS_BY_CATEGORY_OK";

export const JEWELLERY = "Jewellery";
export const JEWELLERY_CATEGORY = "jewelery";

export const ELECTRONICS = "Electronics";
export const ELECTRONICS_CATEGORY = "electronics";

export const INITIAL_STATE = {
  allProducts: [],
  productsByCategory: {
    electronics: [],
    jewelery: [],
    "men's clothing": [],
    "women's clothing": [],
  },

  isLoggedin: false,
  isLoading: false,
};

export const PROMO_BANNERS_JSON = [
  {
    fileName: "/promo-banners/1.jpg",
    promoName: "Big billion day",
    promoDescription: "Big Billion day offer! Coming soon",
  },
  {
    fileName: "/promo-banners/2.jpg",
    promoName: "Women's Day",
    promoDescription: "Women's Day offers",
  },
  {
    fileName: "/promo-banners/3.jpg",
    promoName: "Children's  day",
    promoDescription: "Children's  day offers",
  },
  {
    fileName: "/promo-banners/4.jpg",
    promoName: "Pay day",
    promoDescription: "Pay day offers",
  },
  {
    fileName: "/promo-banners/5.jpg",
    promoName: "Mid week madness",
    promoDescription: "Mid week madness offers",
  },
  {
    fileName: "/promo-banners/6.jpg",
    promoName: "Year end Sale",
    promoDescription: "Year end Sale",
  },
];
