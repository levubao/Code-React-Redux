import React, { Component } from 'react';
import * as Message from './../Constants/Message'
class Product extends Component {
    render() {
        let {product}=this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                        className="img-fluid" alt="" />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {this.showRating(product.rating)}
                       
                        
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <a className="btn-floating blue-gradient" onClick={()=>this.addItemToCart(product)} data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    addItemToCart=(product)=>{
        this.props.addToCart(product);
        this.props.changeMessage(Message.MSG_BUY_ITEM_SUCCESS)
    }
    showRating=rating=>{
        var result=[];
        for (let i = 1; i <= 5; i++) {
            if(i<=rating){
                result.push(<i className="fa fa-star"  key={i}></i>);
            }
           else{
                result.push(<i className="fa fa-star-o"  key={i}></i>);
           }
         }
        return (
            <li>
                {result}
            </li>
        ) 
    }
}

export default Product;