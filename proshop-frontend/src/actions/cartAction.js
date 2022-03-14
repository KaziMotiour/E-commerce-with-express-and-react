import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:5000/api/porducts/${id}`
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        image: data.image,
        price: data.price,
        name:data.name,
        countIntStock: data.countIntStock,
        qty, 
      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    // console.log(localStorage.getItem('cartItems')  );
    console.log(getState().cart.cartItems);
  } catch (error) {
    console.log(error);
  }
};



export const removeFromCart = (id) => (dispatch, getState) =>{
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id
  })
  console.log(getState().cart.cartItems);
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  
}