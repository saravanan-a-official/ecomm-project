import { Link } from "react-router-dom";

function DisplayProductTiles(props) {
  const allProductsData = props.allProductsData;
  console.log("allProductsData", allProductsData)
  const cardData = allProductsData.map((productData, idx) => {
    return (

      <div class="flex flex-col m-4 rounded-md bg-white p-2 " key={idx}>
        <img class="h-40 w-80 rounded-md object-cover" src={productData.thumbnail} />
        <p class="font-bold">{productData.brand}</p>
        <p class="font-bold">{productData.title}</p>
        <ul class="flex">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
            </svg>
          </li>
          <li><a href="#" class="ml-2 font-bold text-blue-600">35,000</a></li>
        </ul>
        <div class="flex flex-row">
          <div>$</div>
          <div class="text-2xl">{productData.price}</div>
          <div class="mt-3 ml-1 text-xs line-through">{productData.price + ((productData.discountPercentage / 100) * productData.price)}</div>
          <div class="mt-3 ml-3 text-xs">({productData.discountPercentage}% Offer)</div>
        </div>
        <p>Get it by <b>Tomorrow, December 8th </b></p>
        <Link className="p-3 text-center bg-yellow-500 hover:text-black-500 font-bold" to={"/view-product-details/" + productData.id}>View More Details</Link>
      </div>

    );
  });
  return (
    <div class="flex flex-row flex-wrap bg-gray-100">
      {cardData}
    </div>
  );
}

export default DisplayProductTiles;
