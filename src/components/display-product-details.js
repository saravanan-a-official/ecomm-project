
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Badge, Carousel, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/global/footer";
import Header from "../components/global/header";
import SpinnerComponent from "./spinner-component";

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { addtoCart } from "../redux/action";
function DisplayProductDetails() {
    const productDetails = useSelector(state => state).productDetails

    return (<div className="App">
        <Header />
        <div className="product-details-page">
            <h1>Product Details Page</h1>

            <div className="shop-by-category small-size">{productDetails.images?.length > 0 ? <Carousel>{formCarousel(productDetails.images)}</Carousel> : <SpinnerComponent text="Loading data"></SpinnerComponent>}</div>
            <div className="shop-by-category">
                {DisplayProductDetailsInTable(productDetails)}
            </div>
        </div>
        <Footer />
    </div >)
}

function DisplayProductDetailsInTable(productDetails) {
    const dispatch = useDispatch();
    return <TableContainer>
        <Table sx={{ maxWidth: 350 }} aria-label="simple table">
            <TableBody>
                <TableRow
                    key="Product Name"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell align="right"><b>Product Name</b></TableCell>
                    <TableCell align="right">{productDetails.title}</TableCell>

                </TableRow>
                <TableRow
                    key="Product category"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell align="right"><b>Product Category</b></TableCell>
                    <TableCell align="right">
                        <h6>
                            <Badge bg="secondary">
                                <Link to={"/shop-products-by-categories"} state={{ "category": productDetails.category }}>
                                    {productDetails.category}
                                </Link>
                            </Badge>
                        </h6>
                    </TableCell>

                </TableRow>
                <TableRow
                    key="Product brand"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell align="right"><b>Product Brand</b></TableCell>
                    <TableCell align="right">{productDetails.brand}</TableCell>

                </TableRow>
                <TableRow
                    key="Product description"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell align="right"><b>Product Description</b></TableCell>
                    <TableCell align="right">{productDetails.description}</TableCell>

                </TableRow>
                <TableRow
                    key="Product Price"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell align="right"><b>Product Price</b></TableCell>
                    <TableCell align="right">${productDetails.price}</TableCell>

                </TableRow>
                <TableRow
                    key="Product Price2"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="right">
                        <Button variant="primary">
                            <Select
                                color="primary"
                                disabled={false}
                                placeholder="Quantity"
                                size="lg">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                            </Select>
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow
                    key="Product Price1"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >


                    <TableCell align="right"><Button variant="primary" onClick={() => dispatch(addtoCart(productDetails))}><Link to="/view-cart/">Add to Cart</Link></Button></TableCell>
                    <TableCell align="right"><Button variant="secondary">Buy Now</Button></TableCell>

                </TableRow>

            </TableBody>
        </Table>
    </TableContainer >
}
function formCarousel(images) {
    return images.map((image, idx) => {
        return <Carousel.Item>
            <img
                className="d-block w-100"
                src={image}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3> </h3>
                <p> </p>
            </Carousel.Caption>
        </Carousel.Item>
    })
}
export default DisplayProductDetails;