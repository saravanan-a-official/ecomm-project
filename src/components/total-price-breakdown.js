import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import Button from 'react-bootstrap/Button';
export default function TotalPriceBreakDown(cartItems) {
    let totalCost = 0;
    cartItems.cartItems.map((currItem) => {
        totalCost += +currItem.price;
    });
    const discount = Math.round((totalCost * 0.1 * 0.18))
    const deliveryCharges = 20;
    const tax = Math.round((totalCost - discount) * 0.18)
    const grandTotal = Math.round((totalCost - discount + deliveryCharges + tax * 0.18))

    return (
        <div className="cost-breakdown">
            <h2>Price Breakdown</h2>
            <TableContainer >
                <Table sx={{ maxWidth: 450 }} align={"center"} size="small" aria-label="a dense table">
                    <TableBody>
                        <TableRow
                            key="price-breakdown"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                <h4><b>Price</b></h4>
                            </TableCell>
                            <TableCell align="center"><h4>$ {totalCost}</h4></TableCell>
                        </TableRow>
                        <TableRow
                            key="discount"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center"><h4><b>Discount(10%)</b></h4></TableCell>
                            <TableCell align="center"><h4>$ {discount}</h4></TableCell>
                        </TableRow>
                        <TableRow
                            key="delivery-charges"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center"><h4><b>Delivery Charges</b></h4></TableCell>
                            <TableCell align="center"><h4>$ {deliveryCharges}</h4></TableCell>
                        </TableRow>
                        <TableRow
                            key="tax"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center"><h4><b>Tax</b></h4></TableCell>
                            <TableCell align="center"><h4>$ {tax}</h4></TableCell>
                        </TableRow>
                        <TableRow
                            key="grand-total"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center"><h4><b>Grand Total</b></h4></TableCell>
                            <TableCell align="center"><h4><b>$ {grandTotal}</b></h4></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button href="/payment-page">Proceed to Payment</Button>
        </div>)
}

