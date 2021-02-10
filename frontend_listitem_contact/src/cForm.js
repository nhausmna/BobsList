import React, { Component } from 'react'


class CForm extends Component {

  initialState = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',
  }

  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  
  state = this.initialState;
    render() {
      const { name, phonenumber, email, message } = this.state;
        return (
        <html>
        <body>
        
        <ul id="parent">
        <li><input type="button" value="Cancel" onClick={this.submitForm} /></li>
        <li><h2>Bob's List</h2></li>
        </ul>
        <form>
        <br></br>
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <br></br>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={phonenumber}
            onChange={this.handleChange} />
            <small>Format: 123-456-7890</small>
          <br></br>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange} />
          <br></br>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            class="resizedTextbox"
            name="message"
            id="message"
            value={message}
            onChange={this.handleChange} />
          <br></br>
          <center><input type="button" value="Submit" onClick={this.submitForm} /> </center>
        </form>
      </body>
      </html>
        )
      }
}

export default CForm;