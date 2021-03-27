import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types';
import * as actions from './../Actions'
class ProductContainer extends Component {
    render() {
        let {products}=this.props;
        return (
            <Products products={products}>
                {this.showProduct(products)}
            </Products>
        );
    }
    showProduct=products=>{
        var {addToCart,changeMessage}=this.props;
        var result=null;
        if(products.length>0){
            result=products.map((item,index)=>{
                return <Product key={index} product={item} addToCart={addToCart} changeMessage={changeMessage}/>
            })
        }
        return result;
    }
}

ProductContainer.propTypes ={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            img:PropTypes.string,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
        })
    ).isRequired,
    changeMessage:PropTypes.func.isRequired
}


const mapSateToProp=state=>{
    return{
        products :state.products
    }
}
const mapDispatchToProp=(dispatch,props)=>{
    return{
        addToCart: (product)=>{
            dispatch(actions.actAddToCart(product,1))
        },
        changeMessage:(message)=>{
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapSateToProp,mapDispatchToProp)(ProductContainer);