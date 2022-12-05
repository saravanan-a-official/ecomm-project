import Footer from "../components/global/footer"
import Header from "../components/global/header"
import Card from 'react-bootstrap/Card';
import TotalPriceBreakDown from "../components/total-price-breakdown";
import { getCartDataFromFirebase } from "../db/getDataFromFirebase";
import { Spinner } from "react-bootstrap";

async function ViewCartItems() {
    /* let stateData = JSON.parse(window.localStorage.getItem("cartItems"))
    console.log("Cart data: ", stateData) */
    const dataFromFirebase = await getCartDataFromFirebase("sara")
    const parsedData = JSON.parse(dataFromFirebase)
    console.log(parsedData)
    if (dataFromFirebase === null)
        dataFromFirebase = []
    return (
        <>
            <Header />
            <div className="App view-cart">
                <h1>View Cart</h1>
                <h2>No. of items in the cart: {dataFromFirebase.length}</h2>
                {dataFromFirebase.cartData !== undefined ? dataFromFirebase.cartData?.length > 0 ? renderCartItemsAndBreakdownTable(dataFromFirebase) : <h1>Your cart is empty.</h1> : <Spinner></Spinner>}
            </div>
            <Footer />
        </>
    )
}

function renderCartItemsAndBreakdownTable(stateData) {
    return <>
        {renderCartItems(stateData)}
        < TotalPriceBreakDown cartItems={stateData} />
    </>
}

function renderCartItems(cartData) {
    return cartData.map((cartItem, idx) => {
        return <Card style={{ width: '18rem' }} key={idx}>
            <Card.Body>
                <Card.Title>{cartItem.brand} {cartItem.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Category: {cartItem.category}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Quantity: {cartItem.quantity}</Card.Subtitle>
                <Card.Text>
                    {cartItem.description}
                </Card.Text>
                <Card.Link href="#">Remove from Cart</Card.Link>
            </Card.Body>
        </Card>
    })
}

export default ViewCartItems