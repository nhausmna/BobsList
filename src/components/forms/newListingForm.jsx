import React, { Component } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";

class NewListingForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    name: sessionStorage.getItem("username"),
    p_name: "",
    imageLink: "",
    price: "",
    distance: "",
    description: "",
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
    const { p_name, imageLink, price, distance, description } = this.state;

    return (
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-pencil-circle mr-2" />
          Create a new listing
        </CardTitle>
        <CardBody>
          <form>
            <p>
              <label htmlFor="p_name">Enter an item title: </label>
            </p>
            <input
              type="text"
              name="p_name"
              id="p_name"
              value={p_name}
              onChange={this.handleChange}
            />
            <p></p>
            <p>
              <label htmlFor="imageLink">Enter your image link: </label>
            </p>
            <input
              type="text"
              name="imageLink"
              id="imageLink"
              value={imageLink}
              onChange={this.handleChange}
            />
            <p></p>
            <p>Enter a price: </p>
            <input
              placeholder="$"
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={this.handleChange}
            />
            <p></p>
            <p>Enter a distance:</p>
            <input
              type="text"
              name="distance"
              id="distance"
              value={distance}
              onChange={this.handleChange}
            />
            <p></p>
            <p>Enter an item description: </p>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              name="description"
              id="description"
              value={description}
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

  handleSubmit = (character) => {
    this.makePostCall(character);
  };

  makePostCall(character) {
    return axios
      .post("http://localhost:5000/listings", character)
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

export default NewListingForm;