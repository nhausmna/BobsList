import React, { Component } from "react";
import axios from "axios";
import MessageReceivedAlert from "../views/ui-components/messageReceivedAlert.jsx";
import MessageSentAlert from "../views/ui-components/messageSentAlert.jsx";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

class Inbox extends Component {
  state = {
    messages_to: [],
    messages_from: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/inbox?to=" + sessionStorage.getItem("username")
      )
      .then((res) => {
        const messages_to = res.data.messages_list;
        this.setState({ messages_to });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
    axios
      .get(
        "http://localhost:5000/inbox?from=" + sessionStorage.getItem("username")
      )
      .then((res) => {
        const messages_from = res.data.messages_list;
        this.setState({ messages_from });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    const { messages_to } = this.state;
    const alerts_to_array = [];

    const { messages_from } = this.state;
    const alerts_from_array = [];

    for (let m of messages_to) {
      alerts_to_array.push(
        <MessageReceivedAlert
          post_title={m.post_title}
          from={m.from}
          message={m.message}
          phonenumber={m.phonenumber}
          email={m.email}
          _id={m._id}
          item_id={m.item_id}
          to={m.to}
        ></MessageReceivedAlert>
      );
    }
    for (let m of messages_from) {
      alerts_from_array.push(
        <MessageSentAlert
          post_title={m.post_title}
          from={m.from}
          message={m.message}
          phonenumber={m.phonenumber}
          email={m.email}
          _id={m._id}
          item_id={m.item_id}
          to={m.to}
        ></MessageSentAlert>
      );
    }

    return (
      <Row>
        <Col sm="6">
          <Card>
            <CardHeader>Messages Received</CardHeader>
            <CardBody>
              <div>{alerts_to_array}</div>
            </CardBody>
          </Card>
        </Col>

        <Col sm="6">
          <Card>
            <CardHeader>Messages Sent</CardHeader>
            <CardBody>
              <div> {alerts_from_array} </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Inbox;
