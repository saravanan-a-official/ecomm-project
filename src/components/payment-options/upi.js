import { useState } from "react";
import { Button, Toast } from "react-bootstrap";

export default function Upi() {
    const [upiId, setUpiId] = useState("")
    return (<div className="App upi">
        <h1>UPI</h1>
        <input type={"text"} placeholder="Enter your UPI ID" value={upiId} onChange={(event) => setUpiId(event.target.value)} /><br /><br />
        <Button onClick={() => checkUpiPaymentStatus(upiId)}>Pay now</Button><br /><br />
    </div>)
}

function checkUpiPaymentStatus(upiId) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/.test(upiId)) {
        return <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">UPI validation success</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>Payment is success</Toast.Body>
        </Toast>
    }
    return <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">UPI validation FAILED</strong>
            <small>Just now</small>
        </Toast.Header>
        <Toast.Body>Invalid UPI ID. Please try again.</Toast.Body>
    </Toast>
}