import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle, 
} from 'reactstrap';

const ItemCard = data => {
    const [contactLink, setContactLink] = useState("/#/login")
    const isLoggedIn = () => {
        if (sessionStorage.getItem('username')){
            setContactLink('/#/contact_seller')
            localStorage.setItem('post_id', data.post_id)
            localStorage.setItem('post_title', data.title)
            localStorage.setItem('seller_name', data.poster)
        }
    }
    return(
        <Card>
            <CardImg top width="100%" src={data.image} />
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle>${data.price}</CardSubtitle>
                <CardText>{data.description}</CardText>
                <Button className="btn" 
                        color="info" 
                        size="md" 
                        href={contactLink} 
                        active
                        onClick={ isLoggedIn } >
                                    Contact Seller
                  </Button>
                <CardText></CardText>
                <CardText>{data.distance} miles away by {data.poster}</CardText>
            </CardBody>
        </Card>
    )
}

export default ItemCard;