import *as types from './../Constants/ActionTypes';

export const actAddToCart=(product,quantity)=>{
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage=(message)=>{
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const removeItem=(item)=>{
    return{
        type:types.REMOVE_ITEM,
        item
    }
}
