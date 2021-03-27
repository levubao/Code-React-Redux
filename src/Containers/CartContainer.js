import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import * as Message from './../Constants/Message'
import * as Actions from './../Actions'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import message from "../Reducers/message";
class CartContainer extends Component {
  render() {
      var {cart}=this.props;
    return (
        <Cart>
            {this.showCartItem(cart)}
            {this.showSumTotalItem(cart)}
        </Cart>
    );
  }
  showCartItem=cart=>{
    var {removeItem,changeMessage}=this.props
      var result=<tr>
        <td>{Message.MSG_EMPTY_CART}</td>
      </tr>;
      if(cart.length>0){
           result= cart.map((item,index)=>{
            return <CartItem cartitem={item} key={index} removeItem={removeItem} changeMessage={changeMessage}/>
          })
      }
      return result
  }
  showSumTotalItem=cart=>{
    var result=null;
    if(cart.length>0){
      result=<CartResult cart={cart}/>
    }
    return result;
  }
}

CartContainer.propTypes = {
  cart:PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            img:PropTypes.string,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
      })
  ).isRequired
};

const mapSateToProp = (state) => {
  return {
      cart:state.cart
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    removeItem:(item)=>{
      dispatch(Actions.removeItem(item))
    },
    changeMessage:(message)=>{
      dispatch(Actions.changeMessage(message))
    }
  };
};
export default connect(mapSateToProp, mapDispatchToProp)(CartContainer);
