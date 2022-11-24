
import { useSelector } from "react-redux"
import Footer from "../components/global/footer"
import Header from "../components/global/header"

function ViewCartItems() {
    const stateData = useSelector(state => state)
    console.log("Cart data: ", stateData.cart)
    return (
        <>
            <Header />
            <div className="App">
                <h1>View Cart Items</h1>
            </div>
            <Footer />
        </>
    )
}

export default ViewCartItems