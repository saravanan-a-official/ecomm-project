import Footer from "../components/global/footer"
import Header from "../components/global/header"
import Card from 'react-bootstrap/Card';
import SpinnerComponent from "../components/spinner-component"
function ViewCartItems() {
    const stateData = JSON.parse(window.localStorage.getItem("cartItems"))
    console.log("Cart data: ", stateData)
    return (
        <>
            <Header />
            <div className="App">
                <h1>View Cart</h1>
                <h2>No. of items in the cart: {stateData.length}</h2>
                {stateData?.length > 0 ? renderCartItems(stateData) : <SpinnerComponent></SpinnerComponent>}
            </div>
            <Footer />
        </>
    )
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