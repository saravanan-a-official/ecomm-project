import * as React from 'react';
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Spinner } from 'react-bootstrap';
import Header from './global/header';
import Footer from './global/footer';

export default function DisplayProductByCategory(props) {
  const allProductData = useSelector(state => state)
  if (allProductData.productsByCategory[props.category] === undefined) {
    return
  }
  const productData = allProductData.productsByCategory[props.category].products
  const divClassName = props.pageName === null ? "shop-by-category" : "shop-by-category App"
  return (
    <>
      {props.pageName !== null ? null : <Header />}
      <div className={divClassName}>
        <h2>Shopy by Category - {props.category}</h2>
        {productData?.length > 0 ? displayProductsByCategoryasImageGrid(productData, props.category) : <Spinner text="Fetcing all products. Please wait"></Spinner>}
      </div>
      {props.pageName !== null ? null : <Footer />}
    </>

  );
}

function displayProductsByCategoryasImageGrid(productData, category) {
  return <ImageList sx={{ width: 500, height: 450 }}>
    {productData.slice(0, 4).map((item, idx) => (
      <ImageListItem key={category + idx}>
        <img
          src={`${item.thumbnail}`}
          srcSet={`${item.thumbnail}`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={<span>Rs {item.price}</span>}
          position="below"
        />
      </ImageListItem>
    ))}
  </ImageList>
}
