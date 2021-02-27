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

const ItemCard = data => {
    var string = "this\n\n\n\n\n is a multi\ line\ string"; 
    return(
        <Card>
            <CardImg top width="100%" src={data.image} />
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle>${data.price}</CardSubtitle>
                <CardText>{data.description}</CardText>
                <Button className="btn" color="info" size="md" href="#/contact_seller" active>
                                    Contact Seller
                  </Button>
                <CardText></CardText>
                <CardText>{data.distance} miles away by {data.poster}</CardText>
            </CardBody>
        </Card>
    )
}

export default ItemCard;