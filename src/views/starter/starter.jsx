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

const Cards = props => {
    const cards = [
        <OneCard title="EXAMPLE PRODUCT" price="$34" description="this will be a desc" image={img3}/>,
        <OneCard title="EXAMPLE PRODUCT 2" price="$3431" description="this will be a desc 2" image={img7}/>
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

const OneCard = data => {
    return(
        <Col xs="12" md="4">
        <Card>
            <CardImg top width="100%" src={data.image} />
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle>{data.price}</CardSubtitle>
                <CardText>{data.description}</CardText>
                <Button className="btn" color="info" size="md" href="#/contact_seller" active>
                                    Contact Seller
                  </Button>
            </CardBody>
        </Card>
    </Col>
    )
}

export default Cards;