
import { useSelector } from "react-redux";
import DisplayAllProducts from "../components/display-all-products";
import SpinnerComponent from "../components/spinner-component";
import Header from "../components/global/header";
import Footer from "../components/global/footer";
export default function GetAllProductData() {
    const allProductsData = useSelector((state) => state);
    return (<><Header /><div className="display-all-products App">
        {allProductsData.allProducts.length > 0 ? <DisplayAllProducts productsData={allProductsData.allProducts} /> : <SpinnerComponent text="Fetcing all products. Please wait"></SpinnerComponent>}</div><Footer /></>)
}