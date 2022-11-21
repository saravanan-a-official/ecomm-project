import { useSelector } from "react-redux";
function DisplayProductByCategory() {
  const productCategoryData = useSelector((state) => state);
  return (
    <div className="shop-by-category">
      <h1>Shopy Products by Category</h1>
    </div>
  );
}

export default DisplayProductByCategory;
