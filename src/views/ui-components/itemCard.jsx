import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle, 
    Col
} from 'reactstrap';


const imgStyle = {
    maxHeight: 300
}

const ItemCard = data => {
    var string = "this\n\n\n\n\n is a multi\ line\ string"; 
    return(
        <Col xs="12" md="4">
        <Card>
            <CardImg top width="100%" src={data.image} style={imgStyle}/>
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle>${data.price}</CardSubtitle>
                <CardText>{data.description}</CardText>
                <Button className="btn" color="info" size="md" href="#/contact_seller" active>
                                    Contact Seller
                  </Button>
                <CardText></CardText>
                <CardText>{data.timeAgo} {data.distance} miles away</CardText>
            </CardBody>
        </Card>
    </Col>
    )
}

export default ItemCard;