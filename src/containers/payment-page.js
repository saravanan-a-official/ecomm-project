import DisplayPaymentOptions from "../components/display-payment-options"
import Footer from "../components/global/footer"
import Header from "../components/global/header"

export default function PaymentPage() {
    return (
        <>
            <Header />
            <div className="App PaymentPage">
                <h1>Payment Page</h1>
                <DisplayPaymentOptions />
            </div>
            <Footer />
        </>
    )
}