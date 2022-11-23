import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Spinner } from 'react-bootstrap';


export default function DisplayProductByCategory(props) {
  const allProductData = useSelector(state => state)
  const productData = allProductData.productsByCategory[props.category].products
  console.log("productData", productData)

  return (
    <div className='shop-by-category'>
      <h2>Shopy by Category - {props.category}</h2>
      {productData?.length > 0 ? displayProductsByCategoryasImageGrid(productData) : <Spinner></Spinner>}
    </div>
  );
}

function displayProductsByCategoryasImageGrid(productData) {
  return <ImageList sx={{ width: 500, height: 450 }}>
    {productData.slice(0, 4).map((item) => (
      <ImageListItem key={item.img}>
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
