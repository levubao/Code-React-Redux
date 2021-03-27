import * as types from "./../Constants/ActionTypes";
var data = JSON.parse(localStorage.getItem("CART"));
// var initialState = [
//   {
//     product: {
//       id: 1,
//       name: "Iphone 7 plus",
//       image: "",
//       description: "Product of apple",
//       price: 500,
//       inventory: 10,
//       rating: 0,
//     },
//     quantity: 5,
//   },
//   {
//     product: {
//       id: 2,
//       name: "Iphone 8 plus",
//       image: "",
//       description: "Product of apple 1",
//       price: 600,
//       inventory: 20,
//       rating: 4,
//     },
//     quantity: 2,
//   },
// ];
var initialState=data? data:[];
const cart = (state = initialState, actions) => {
  var { product, quantity } = actions;
 
  switch (actions.type) {
    case types.ADD_TO_CART:
      //var checkv=state.find(x=>x.product.id===product.id);
      var check=state.findIndex(x=>x.product.id===product.id);
      if(check===-1){
        state.push({
          product,
          quantity
        })
      }
      else{
        state[check].quantity ++;
      }
      //console.log("checkv",checkv)
      localStorage.setItem('CART',JSON.stringify(state));
      return [...state];
      case types.REMOVE_ITEM:
        var checkIndex=state.findIndex(x=>x.product.id===actions.item.id)
        if(checkIndex!==-1){
          state.splice(checkIndex,1)
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state]
    default:
      return [...state];
  }
};
export default cart;
