import { useDispatch } from "react-redux";
import RenderHomePage from "../components/render-home-page";
import { getAllProductsData } from "../redux/action";

function HomePage() {
  const dispatch = useDispatch();
  dispatch(getAllProductsData());
  return <RenderHomePage />;
}

export default HomePage;
