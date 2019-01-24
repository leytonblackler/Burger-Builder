import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}</li>
    });
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button type="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button type="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
