import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

class RegistrationForm extends Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
   
    initialState = {
        username: '',
        email: '',
        password: ''
      }



    handleChange = (event) => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
        console.log('handled change')
    }

    render(){
        const { username, email, password } = this.state;

        return (
            <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
                <i className="mdi mdi-comment-processing-outline mr-2" />
            Register an account
            </CardTitle>
            <CardBody>
        <form>
            <p>
            <label htmlFor="username">Enter your username:</label>
            </p>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={this.handleChange}
                />
            <p></p>
            <p>Enter your email: </p>
                 <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                />
            <p></p>
            <p>Enter your password: </p>
                 <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                />
            <p></p> 
        </form>
        <p></p>

        <Button className="btn" color="primary" size="lg" onClick={this.submitForm} >
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

    submitForm = () => {
        this.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    handleSubmit = user_credentials => {
        this.makePostCall(user_credentials);
    }

    makePostCall(user_credentials) {
        return axios.post('http://localhost:5000/register', user_credentials)
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
            console.log(error);
            return false;
          });
      }
}

export default RegistrationForm;