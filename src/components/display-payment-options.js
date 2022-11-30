import { Button, Tabs, Tab } from "react-bootstrap"
import CreditDebitCart from "./payment-options/credit-debit-card"
import NetBanking from "./payment-options/net-banking"
import Upi from "./payment-options/upi"

export default function DisplayPaymentOffers() {
    return (
        <div className="App payment-options">
            <Tabs
                defaultActiveKey="upi"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="upi" title="UPI">
                    <Upi />
                </Tab>
                <Tab eventKey="debitcreditcard" title="Credit/Debit Cart">
                    <CreditDebitCart />
                </Tab>
                <Tab eventKey="netbanking" title="Net Banking">
                    <NetBanking />
                </Tab>

            </Tabs>
            <Button>Place Order</Button>
        </div>
    )
}