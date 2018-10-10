import React from 'react';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import './Cart.css';

export class Cart extends React.Component {

  render() {

    const emptyCart =  <p>Your Cart is empty.Start shopping now</p>;


    const listItems = this.props.data.map( (value) =>

    <li className="cart" key={value.name}>
      <img className ="cartImage" src={value.image} alt='image' /> <br/> {value.name} <br/> Cost:-{value.price} {value.currency} <br/>Quantity :- {value.quantity}
    </li>);

    const total = <div> <b> Total Charges:-</b>{sum(this.props.data.map((product) =>
    product.price * product.quantity ))} INR </div>;

    const clearCart =<div> <h4>Cart</h4>
      <button className="clearCart" onClick={this.props.clearCart}>Clear Cart</button> </div>

      return (
      <div >

        <div class="dropdown">
          <button class="dropbtn" ><img className="cartIcon" src={require('./images/cartimage.jpg')}/>Cart </button>
          <div class="dropdown-content">
            {isEmpty(this.props.data) ? '' : clearCart }
            <ul className="cart">
              {isEmpty(this.props.data) ? emptyCart : listItems }
            </ul>
            {isEmpty(this.props.data) ? '' :  total}
            {isEmpty(this.props.data) ? '' :<Link className="button" to='checkout'>Checkout</Link>}
          </div>
        </div>

      </div>
    );
  }
}
