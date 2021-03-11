import React, { useState } from "react";
import axios from "axios";
import { Alert, Col, Row } from "reactstrap";

const MessageReceivedAlert = (data) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    axios.delete("http://localhost:5000/inbox/" + data._id);
    setVisible(false);
    console.log(data);
  };

  return (
    <Alert color="success" isOpen={visible} toggle={onDismiss.bind(null)}>
      <h3 className="alert-heading">
        {data.post_title} from @{data.from}{" "}
      </h3>
      <p> {data.message} </p>

      <hr />

      <h4 className="alert-heading">Contact Information</h4>
      <Row className="mt-3">
        <Col xs="6">
          <div>
            <p> Phone Number: {data.phonenumber} </p>
          </div>
        </Col>
        <Col xs="6">
          <div>
            <p> Email: {data.email} </p>
          </div>
        </Col>
      </Row>
    </Alert>
  );
};

export default MessageReceivedAlert;
