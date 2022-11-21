import { useState } from "react";
import Toast from "react-bootstrap/Toast";

function RecentBuysNotification() {
  const [toastShowStatus, setToastShowStatus] = useState(true);
  return (
    <Toast
      autohide="false"
      show={toastShowStatus}
      onClose={() => setToastShowStatus(!toastShowStatus)}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Someone has just bought</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        Hello, world! User had just bought 2x quantity. Hurry soon!
      </Toast.Body>
    </Toast>
  );
}

export default RecentBuysNotification;
