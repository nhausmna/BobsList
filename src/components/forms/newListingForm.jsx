import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class NewListingForm extends Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
   
    initialState = {
        title: '',
        photo: '',
        price: '',
        city: '',
        category: '',
        description: '',
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
        const { title, price, photo, city, category, description } = this.state;

        return (
            <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
                <i className="mdi mdi-pencil-circle mr-2" />
            Create a new listing
            </CardTitle>
            <CardBody>
        <form>
            <p>
            <label htmlFor="title">Enter an item title: </label>
            </p>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={this.handleChange}
                />
            <p></p>
            <p>
            <label htmlFor="photo">Enter the link to a photo of your item: </label>
            </p>
            <input
                type="text"
                name="photo"
                id="photo"
                value={photo}
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
            <p>Enter a city:</p>
                 <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={this.handleChange}
                />
            <p></p>
            <p>Select a category:</p>
                <select category={this.state.category}>
                    <option category="Appliances">Appliances</option>
                    <option category="Clothing">Clothing</option>
                    <option category="Custom">Custom</option>
                    <option category="Electronics">Electronics</option>
                    <option category="Furniture">Furniture</option>
                    <option category="Vehicles">Vehicles</option>
                    <option category="Other">Other</option>
                </select>
            <p></p>
            <p>Enter an item description: </p>
                <TextareaAutosize 
                aria-label="minimum height" 
                rowsMin={3} 
                name = "description"
                id = "description"
                value={description}
                onChange={this.handleChange}
                />
                
        </form>
        <p></p>
            
        <Button className="btn" color="primary" size="lg" onChange={this.handleSubmit} href="/" >
                    Submit
        </Button>
        <container> </container>
        <Button className="btn" color="secondary" size="lg" href="/" >
                    Cancel
        </Button>
            </CardBody>
            </Card>

        );
    }
}

export default NewListingForm;