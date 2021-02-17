import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';


import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';
import ItemCard from '../ui-components/itemCard';

const Cards = props => {
    const cards = [
        <ItemCard title="EXAMPLE PRODUCT" price="34" description="this will be a desc" image={img3} timeAgo="2 minutes ago" location="LA"/>,
        <ItemCard title="EXAMPLE PRODUCT 2" price="3431" description="this will be a desc 2" image={img7} timeAgo="4 hours ago" location="SLO"/>
    ]

    return (
        <div>
            <h5 className="mb-3">Listings</h5>
            <Row>
                {cards}
            </Row>
        </div>
    );
}

export default Cards;