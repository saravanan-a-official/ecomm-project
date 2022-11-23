import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router"
import DisplayProductDetails from "../components/display-product-details"
import { getProductDetails } from "../redux/action";
function ViewProductDetails(props) {
    const productId = useParams().id;
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProductDetails(productId)) })
    return <>

        <DisplayProductDetails />
    </>
}

export default ViewProductDetails