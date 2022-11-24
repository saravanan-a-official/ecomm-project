export const API_BASE_URL = "https://dummyjson.com/";
export const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_OK = "GET_ALL_PRODUCTS_OK";
export const LOAD_PRODS_BY_CATEGORY = "LOAD_PRODS_BY_CATEGORY";
export const GET_PRODS_BY_CATEGORY_OK = "GET_PRODS_BY_CATEGORY_OK";
export const LOAD_PRODUCT_DETAILS = "LOAD_PRODUCT_DETAILS";
export const GET_PRODUCT_DETAILS_OK = "GET_PRODUCT_DETAILS_OK";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_OK = "ADD_TO_CART_OK";


export const SMARTPHONE_CATEGORY = "smartphones";
export const LAPTOPS_CATEGORY = "laptops";
export const FRAGRANCES_CATEGORY = "fragrances";
export const SKINCARE_CATEGORY = "skincare";
export const GROCERIES_CATEGORY = "groceries";
export const HOME_DECOR_CATEGORY = "home-decoration";
export const FURNITURE_CATEGORY = "furniture";
export const TOPS_CATEGORY = "tops";
export const WOMEN_DRESS_CATEGORY = "womens-dresses";
export const WOMEN_SHOES_CATEGORY = "womens-shoes";
export const MENS_SHIRTS_CATEGORY = "mens-shirts";
export const MENS_SHOES_CATEGORY = "mens-shoes";
export const MENS_WATCHES_CATEGORY = "mens-watches";
export const WOMENS_WATCHES_CATEGORY = "womens-watches";
export const WOMENS_BAGS_CATEGORY = "womens-bags";
export const WOMEN_JEWELLERY_CATEGORY = "womens-jewellery";
export const SUNGLASSES_CATEGORY = "sunglasses";
export const AUTOMOTIVE_CATEGORY = "automotive";
export const MOTORCYCLE_CATEGORY = "motorcycle";
export const LIGHTING_CATEGORY = "lighting"

export const SMARTPHONE_TITLE = "Smart Phones";
export const LAPTOPS_TITLE = "Laptops";
export const FRAGRANCES_TITLE = "Fragrances";
export const SKINCARE_TITLE = "Skincare";
export const GROCERIES_TITLE = "Groceries";
export const HOME_DECOR_TITLE = "Home-Decoration";
export const FURNITURE_TITLE = "Furniture";
export const TOPS_TITLE = "tops";
export const WOMEN_DRESS_TITLE = "Women's Dresses";
export const WOMEN_SHOES_TITLE = "Women's Shoes";
export const MENS_SHIRTS_TITLE = "Men's Shirts";
export const MENS_SHOES_TITLE = "Men's Shoes";
export const MENS_WATCHES_TITLE = "Men's Watches";
export const WOMENS_WATCHES_TITLE = "Women's Watches";
export const WOMENS_BAGS_TITLE = "Women's Bags";
export const WOMEN_JEWELLERY_TITLE = "Womens Jewellery";
export const SUNGLASSES_TITLE = "Sunglasses";
export const AUTOMOTIVE_TITLE = "Automotive";
export const MOTORCYCLE_TITLE = "Motorcycle";
export const LIGHTING_TITLE = "Lighting"

export const HOME_PAGE = "HOME PAGE"

export const INITIAL_STATE = {
  allProducts: [],
  productsByCategory: {
    "smartphones": [],
    "laptops": [],
    "fragrances": [],
    "skincare": [],
    "groceries": [],
    "home-decoration": [],
    "furniture": [],
    "tops": [],
    "womens-dresses": [],
    "womens-shoes": [],
    "mens-shirts": [],
    "mens-shoes": [],
    "mens-watches": [],
    "womens-watches": [],
    "womens-bags": [],
    "womens-jewellery": [],
    "sunglasses": [],
    "automotive": [],
    "motorcycle": [],
    "lighting": [],
    "offers": []
  },
  productDetails: {},
  isLoggedin: false,
  isLoading: false,
  cart: []
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
