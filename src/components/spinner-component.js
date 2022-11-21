import Spinner from "react-bootstrap/Spinner";

function SpinnerComponent() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">
        Fetching product details... Please wait...
      </span>
    </Spinner>
  );
}

export default SpinnerComponent;
