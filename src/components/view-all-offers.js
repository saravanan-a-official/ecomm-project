import { useSelector } from "react-redux"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function ViewAllOffers() {
    const allOffersFromState = useSelector(state => state);
    const allOffers = allOffersFromState.offers;

    return allOffers.length > 0 ? displayAvailableOffers(allOffers) : <h1>No offers Available</h1>
}

function displayAvailableOffers(allOffers) {
    return allOffers.map((offer, idx) => {
        return <Card sx={{ minWidth: 275 }} key={idx}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Offer
                </Typography>
                <Typography variant="h5" component="div">
                    {offer.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {offer.isActive}
                </Typography>
                <Typography variant="body2">
                    {offer.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Copy Offer Code</Button>
            </CardActions>
        </Card>
    })

}
export default ViewAllOffers