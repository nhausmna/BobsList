import React from "react";
import { Button, Row, Col } from "reactstrap";
import ItemCard from "../ui-components/itemCard.jsx";
import { Component } from "react";
import axios from "axios";

class Cards extends Component {
  state = {
    listings: [],
    distance: 0,
    price: 0,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/listings")
      .then((res) => {
        const listings = res.data.listings_list;
        this.setState({ listings });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }

  makeCardArray(colArray) {
    const cards = [];
    for (let listing of colArray) {
      cards.push(
        <ItemCard
          title={listing.p_name}
          price={listing.price}
          description={listing.description}
          image={listing.imageLink}
          timeAgo=""
          distance={listing.distance}
          poster={listing.name}
          post_id={listing._id}
        />
      );
    }
    return cards;
  }

  sortDistance = () => {
    const { listings, price, distance } = this.state;
    axios
      .get(`http://localhost:5000/listings/sort?type=distance`)
      .then((res) => {
        const listings = res.data.listings_list;
        this.setState({ listings });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  };

  sortPrice = () => {
    const { listings, price, distance } = this.state;
    axios
      .get(`http://localhost:5000/listings/sort?type=price`)
      .then((res) => {
        const listings = res.data.listings_list;
        this.setState({ listings });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  };

  submitForm = () => {
    const { listings, price, distance } = this.state;
    if (price !== 0) {
      axios
        .get(`http://localhost:5000/listings?price=${price}`)
        .then((res) => {
          const listings = res.data.listings_list;
          this.setState({ listings });
        })
        .catch(function (error) {
          //Not handling the error. Just logging into the console.
          console.log(error);
        });
    }
    if (distance !== 0) {
      axios
        .get(`http://localhost:5000/listings?distance=${distance}`)
        .then((res) => {
          const listings = res.data.listings_list;
          this.setState({ listings });
        })
        .catch(function (error) {
          //Not handling the error. Just logging into the console.
          console.log(error);
        });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { listings, price, distance } = this.state;

    var colNum = 0;

    const col1 = [];
    const col2 = [];
    const col3 = [];
    const col4 = [];

    for (let listing of listings) {
      if (colNum === 0) {
        col1.push(listing);
      }
      if (colNum === 1) {
        col2.push(listing);
      }
      if (colNum === 2) {
        col3.push(listing);
      }
      if (colNum === 3) {
        col4.push(listing);
      }
      colNum++;
      if (colNum === 4) {
        colNum = 0;
      }
    }
    const cards1 = this.makeCardArray(col1);
    const cards2 = this.makeCardArray(col2);
    const cards3 = this.makeCardArray(col3);
    const cards4 = this.makeCardArray(col4);

    return (
      <div>
        <h5 className="mb-3">Listings</h5>
        <Row>
          <Col xs="3">
            <td>Enter a max distance (miles):</td>
            <input
              type="text"
              name="distance"
              id="distance"
              value={distance}
              onChange={this.handleChange}
            />
            <p></p>
            <Button
              className="btn"
              color="primary"
              size="lg"
              onClick={this.submitForm}
            >
              Update
            </Button>
            <p></p>
          </Col>
          <Col xs="3">
            <form>
              <td>Enter a max price: </td>
              <input
                placeholder="$"
                type="text"
                name="price"
                id="price"
                value={price}
                onChange={this.handleChange}
              />
              <p></p>
              <Button
                className="btn"
                color="primary"
                size="lg"
                onClick={this.submitForm}
              >
                Update
              </Button>
              <p></p>
            </form>
          </Col>
          <Col xs="3">
            <p></p>
            <Button
              className="btn"
              color="primary"
              size="lg"
              onClick={this.sortPrice}
            >
              Sort by Price
            </Button>
            <p></p>
          </Col>
          <Col xs="3">
            <p></p>
            <Button
              className="btn"
              color="primary"
              size="lg"
              onClick={this.sortDistance}
            >
              Sort by Distance
            </Button>
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col xs="3">{cards1}</Col>
          <Col xs="3">{cards2}</Col>
          <Col xs="3">{cards3}</Col>
          <Col xs="3">{cards4}</Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
