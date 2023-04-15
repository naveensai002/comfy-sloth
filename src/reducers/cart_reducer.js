import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, product, amount } = action.payload;
    const { stock } = product;

    const tempItem = state.cart.find((item) => item.id === id + color);

    if (tempItem.id === id + color) {
    } else {
      const newItem = {
        id: color + id,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        stock: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }

    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
