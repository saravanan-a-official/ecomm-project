import { Button, Card, Col, Row } from "react-bootstrap";

function DisplayProductTiles(props) {
  const allProductsData = props.allProductsData;
  const cardData = allProductsData.map((productData, idx) => {
    return (
      <Col key={idx}>
        <Card style={{ width: "30rem" }} key={idx}>
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.description}</Card.Text>
            <Button variant="primary" href={"/view-product-details/" + productData.id} >View More Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Row xs={1} md={2} className="g-4">
      {cardData}
    </Row>
  );
}

export default DisplayProductTiles;
