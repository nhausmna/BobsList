import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class ContactForm extends Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
   
    initialState = {
        name: '',
        phonenumber: '',
        email: '',
        message: '',
      }



    handleChange = (event) => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const { name, phonenumber, email, message } = this.state;

        return (
            <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
                <i className="mdi mdi-comment-processing-outline mr-2" />
            Contact Seller
            </CardTitle>
            <CardBody>
        <form>
            <p>
            <label htmlFor="name">Enter your name:</label>
            </p>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
                />
            <p></p>
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

        <Button className="btn" color="primary" size="lg" onChange={this.handleSubmit} href="/" >
                    Submit
        </Button>
        <container> </container>
        <Button className="btn" color="secondary" size="lg" href= "/" >
                    Cancel
        </Button>
            </CardBody>
            </Card>

        );
    }
}

export default ContactForm;