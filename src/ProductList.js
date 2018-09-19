import React from 'react';
import './App.css';
import {Cart} from './Cart.js';


export class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products : [
            {name:'Apple - Washington',price:250,image:require('./images/apple.jpg'),currency:'INR'},
            {name:'Grapes - Red',price:150,image:require('./images/grapes.jpg'),currency:'INR'},
            {name:'Tomato',price:125,image:require('./images/tomato.jpg'),currency:'INR'},
            {name:'Kiwi - Green',price:95,image:require('./images/kiwi.jpg'),currency:'INR'},
            {name:'Potato/Batate',price:30,image:require('./images/potato.jpg'),currency:'INR'},
            {name:'Ladies Finger',price:45,image:require('./images/ladiesfinger.jpg'),currency:'INR'}
          ],

    cart :[]
  }

    this.addToCart =this.addToCart.bind(this);

}

    addToCart(name,price){
        this.setState({cart:this.state.cart.concat([name,price])})
    }

    render(){
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>
          <img src={data.image}/><br/>
          {data.name}<br/>
          {data.currency} {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.addToCart(data.name,data.price)}>Add To Cart </button>
          {/* <Link to='/cart' >  <button className="addBasket"  value="Add" onClick={ () => this.addToCart(data.price)}>Add To Cart </button></Link> */}
        </div>

    );
      return(
        <div>
          <div className="boxed">
            {listItems}
          </div>
          <div className="boxed">
            <Cart data={this.state.cart}/>
          </div>
        </div>
          );
}
}
