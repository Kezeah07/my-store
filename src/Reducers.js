//The reducers component  was created to store information from the cart component.
import { ADD_TO_CART, SET_SHIPPING_METHOD } from './Actions';

const initialState = {
  cart: [],
  totalPrice: 0,
  shippingMethod: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart, action.payload];
      const newTotalPrice = newCart.reduce((total, item) => total + item.price, 0);
      return {
        ...state,
        cart: newCart,
        totalPrice: newTotalPrice,
      };
    case SET_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
