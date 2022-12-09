import Spinner from "react-bootstrap/Spinner";
function SpinnerComponent(props) {
  return (
    <div className="App">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{props.text}</span>
      </Spinner>
    </div>
  );
}

export default SpinnerComponent;
