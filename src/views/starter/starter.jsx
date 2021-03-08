import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import ItemCard from '../ui-components/itemCard.jsx';
import { Component } from 'react';
import axios from 'axios';


class Cards extends Component {
    state = {
        listings: []
    }


    componentDidMount() {
        axios.get('http://localhost:5000/listings')
            .then(res => {
                const listings = res.data.listings_list;
                this.setState({ listings });
            })
            .catch(function (error) {
                //Not handling the error. Just logging into the console.
                console.log(error);
            });
    }

    makeCardArray(colArray) {
        const cards = []
        for (let listing of colArray) {
            cards.push(<ItemCard
                title={listing.p_name}
                price={listing.price}
                description={listing.description}
                image={listing.imageLink}
                timeAgo=""
                distance={listing.distance}
                poster={listing.name} 
                post_id={listing._id} />)
        }
        return cards
    }

    render() {
        console.log(this.state)
        const { listings } = this.state

        var colNum = 0;

        const col1 = []
        const col2 = []
        const col3 = []
        const col4 = []

        for (let listing of listings) {
            if (colNum === 0) {
                col1.push(listing)
            }
            if (colNum === 1) {
                col2.push(listing)
            }
            if (colNum === 2) {
                col3.push(listing)
            }
            if (colNum === 3) {
                col4.push(listing)
            }
            colNum++;
            if (colNum === 4) {
                colNum = 0
            }
        }
        const cards1 = this.makeCardArray(col1)
        const cards2 = this.makeCardArray(col2)
        const cards3 = this.makeCardArray(col3)
        const cards4 = this.makeCardArray(col4)

        return (
            <div>
                <h5 className="mb-3">Listings</h5>
                <Row>
                    <Col xs="3">
                        {cards1}
                    </Col>
                    <Col xs="3">
                        {cards2}
                    </Col>
                    <Col xs="3">
                        {cards3}
                    </Col>
                    <Col xs="3">
                        {cards4}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cards;