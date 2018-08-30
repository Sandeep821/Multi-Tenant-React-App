import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Collage extends Component {
    render () {
        return (
            <Jumbotron>
            <h1>VW CREDIT</h1>
            <p>
            Welcome to Volkswagen Credit's "My Account" service! Simplify your life today with online payments, account management tools, paperless invoicing and information on your account options. It's our way of keeping you in the driver's seat.
    
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>
        )
    }
}

export default Collage;