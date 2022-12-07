import { StarIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addtoCart } from "../redux/action";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function DisplayDetails() {
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state).productDetails
    console.log("productDetails ", productDetails)
    return <div className="bg-white">
        <div className="pt-6">
            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img
                        src={productDetails.images[0]}
                        alt={productDetails.brand}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img
                            src={productDetails.images[1]}
                            alt={productDetails.brand}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img
                            src={productDetails.images[2]}
                            alt={productDetails.brand}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                    <img
                        src={productDetails.images[3]}
                        alt={productDetails.brand}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productDetails.name}</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">$ {productDetails.price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            productDetails.rating >= rating ? 'text-gray-900' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {productDetails.rating} out of 5
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => dispatch(addtoCart({ itemDetail: productDetails, newQuantity: 2 }))}
                    >
                        <Link to="/view-cart/">Add to Cart</Link>
                    </button>
                </div>

            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div >
}