
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Badge, Carousel, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/global/footer";
import Header from "../components/global/header";
import SpinnerComponent from "./spinner-component";
import { useState } from "react";
import Select from '@mui/joy/Select';

import { addtoCart } from "../redux/action";
function DisplayProductDetails() {
    const productDetails = useSelector(state => state).productDetails
    console.log(productDetails);
    return <>
        <Header />
        {productDetails.images?.length > 0 ? displayProductDetails(productDetails) : <SpinnerComponent></SpinnerComponent>}
        <Footer />

    </>
}

function displayProductDetails(productDetails) {
    return (<div className="flex h-screen flex-col mt-6 bg-white">
        <div className="flex flex-row mx-36">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                {productDetails.images.map((image, idx) => {
                    return <div key={idx}>
                        <img className="h-60 w-80 rounded-md object-cover"
                            src={image} />
                    </div>
                })}
            </div>
            <div className="flex flex-col mx-6">
                <p className="text-2xl font-extrabold">{productDetails.brand} {productDetails.title}</p>
                <a href="#" className="font-semibold text-blue-600 underline">Visit {productDetails.brand} Store</a>
                <ul className="flex">
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                            className="mr-1 mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                            className="mt-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                            </path>
                        </svg>
                    </li>
                    <li><a href="#" className="ml-2 font-bold text-blue-600">{productDetails.rating}</a></li>
                </ul>
                <p>In <a href="#" className="text-blue-600 font-semibold">{productDetails.category}</a></p>
                <div className="flex flex-row">
                    <p className="text-2xl font-bold text-red-500">{productDetails.discountPercentage}%</p>
                    <p className="text-black-500 ml-5 text-2xl font-bold">$ {productDetails.price}</p>
                </div>
            </div>
            <div className="m-2 flex flex-col border-2 border-gray-500 p-2">
                <p className="text-black-500 text-2xl font-bold mb-2">$ {productDetails.price}</p>
                <p className="w-80 font-bold mb-2"><a href="#" className="font-bold text-green-600">Free Delivery</a> Saturday, 10
                    December. Order within 8 hours.</p>
                <div className="flex flex-row  mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <a href="#" className="font-semibold">Select Location</a>
                </div>
                <p className="text-xl font-bold text-green-600 mb-2">In Stock.</p>
                <p className="mb-2"><b>Sold By:</b> Seller 1</p>
                <div className="flex flex-row">
                    <p className="mr-3 font-bold mb-2">Quantity:</p>
                    <select className="border-2 border-black">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>

                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-xl py-2 my-3">Add to Cart</button>
                <button className="bg-gray-400 hover:bg-gray-500 font-semibold rounded-xl py-2 my-3">Buy Now</button>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="my-6 mx-36">
                <ul className="flex flex-row self-center">
                    <li className="pr-20">
                        <dt><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg></dt>
                        <dd className="font-semibold">Secured Payment</dd>
                    </li>
                    <li className="pr-20">
                        <dt>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </dt>
                        <dd className="font-semibold">Multiple Payment Options</dd>
                    </li>
                    <li className="pr-20">
                        <dt>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>

                        </dt>
                        <dd className="font-semibold">Authentic Products</dd>
                    </li>
                    <li className="pr-20">
                        <dt>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>

                        </dt>
                        <dd className="font-semibold">Easy to Order and Returns</dd>
                    </li>
                </ul>
            </div>
            <div className="mx-36">
                <p className="text-2xl font-extrabold">About the product</p>
                <p>{productDetails.description}</p>
            </div>
        </div>
    </div>)
}

export default DisplayProductDetails;