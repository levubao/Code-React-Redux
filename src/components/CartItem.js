import React, { Component } from "react";
import * as Message from './../Constants/Message'
class CartItem extends Component {
  render() {
    var {cartitem}=this.props
    return (
      <tr>
        <th scope="row">
          <img
            src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartitem.product.name}</strong>
          </h5>
        </td>
        <td>{cartitem.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{cartitem.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.totalPrice(cartitem.product.price,cartitem.quantity)}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item" 
            onClick={()=>this.removeItem(cartitem.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  removeItem=(removeItem)=>{
    this.props.removeItem(removeItem);
    this.props.changeMessage(Message.MSG_REMOVE_ITEM)
  }
  totalPrice=(price,quantity)=>{
    return price * quantity
  }
}

export default CartItem;
