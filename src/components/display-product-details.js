
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import DisplayDetails from './DisplayDetails'
import Header from './global/header';
import Footer from './global/footer';


export default function DisplayProductDetails() {

    const productDetails = useSelector(state => state).productDetails
    console.log("productDetails ", productDetails)
    return (
        <>
            <Header />
            {productDetails.images?.length > 0 ? <DisplayDetails /> : <Spinner />}
            <Footer />
        </>
    )
}

