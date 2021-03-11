import React, { Component } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    from: sessionStorage.getItem("username"),
    to: localStorage.getItem("seller_name"),
    phonenumber: "",
    email: "",
    message: "",
    item_id: localStorage.getItem("post_id"),
    post_title: localStorage.getItem("post_title"),
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { phonenumber, email, message } = this.state;

    return (
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-comment-processing-outline mr-2" />
          Contact Seller
        </CardTitle>
        <CardBody>
          <form>
            <p>Enter your phone number: </p>
            <input
              placeholder="(123) 456-7890"
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={phonenumber}
              onChange={this.handleChange}
            />
            <p></p>
            <p>Enter your email:</p>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            <p></p>
            <p>Enter your message to the seller:</p>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              placeholder=""
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
            />
          </form>
          <p></p>

          <Button
            className="btn"
            color="primary"
            size="lg"
            onClick={this.submitForm} /*href="/"*/
          >
            Submit
          </Button>
          <container> </container>
          <Button className="btn" color="secondary" size="lg" href="/">
            Cancel
          </Button>
        </CardBody>
      </Card>
    );
  }
  submitForm = () => {
    this.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  handleSubmit = (message) => {
    this.makePostCall(message);
  };

  makePostCall(message) {
    return axios
      .post("http://localhost:5000/send_message", message)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  }
}

export default ContactForm;
