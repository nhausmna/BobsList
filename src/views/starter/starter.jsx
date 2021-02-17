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

const OneCard = () => {
    return(
        <Col xs="12" md="4">
        <Card>
            <CardImg top width="100%" src={img4} />
            <CardBody>
                <CardTitle>Example Product</CardTitle>
                <CardSubtitle>$999</CardSubtitle>
                <CardText>This is where the description will go</CardText>
                <Button className="btn" color="info" size="md" href="#/contact_seller" active>
                                    Contact Seller
                  </Button>
            </CardBody>
        </Card>
    </Col>
    )
}

const Cards = () => {
    const cards = [<OneCard />, <OneCard />, <OneCard />, <OneCard />, <OneCard />, <OneCard />, <OneCard />, <OneCard />, <OneCard />]

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <h5 className="mb-3">Listings</h5>
            <Row>
                {cards}
            </Row>
        </div>
    );
}

export default Cards;