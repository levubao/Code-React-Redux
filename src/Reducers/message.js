import * as types from "./../Constants/ActionTypes";
import * as Message from "./../Constants/Message";
var initialState=Message.MSG_WELCOME_CART;
const message = (state = initialState, actions) => {
  switch (actions.type) {
    case types.CHANGE_MESSAGE:
        return actions.message;
    default:
      return state;
  }
};
export default message;
