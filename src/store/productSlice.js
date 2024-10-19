import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  cartItems: [],
  products: [

    { id: '1', name: 'Foundation', description: 'Full coverage foundation', price: 229, image: './images/product1.jpg'},
    { id: '2', name: 'Concealer', description: 'Go away dark marks,spots and blemishes concealer', price: 159, image: './images/product2.jpg'},
    { id: '3', name: 'Blush', description: 'Add some colour to my cheeks blush', price: 99, image: './images/product3.jpg'},
    { id: '4', name: 'Setting Spray', description: 'Set my face beat setting spray', price: 109, image: './images/product4.jpg'},
    { id: '5', name: 'Liquid Eye Liner', description: 'The perfect cat eye, eye liner', price: 89, image: './images/product5.jpg'},
    { id: '6', name: 'Lip Liner', description: 'Outline my lips lipliner', price: 59, image: './images/product6.jpg'},
    { id: '7', name: 'Lipstick', description: 'Matt lipstick', price: 79, image: './images/product7.jpg'},
    { id: '8', name: 'Mascara', description: 'Give my lashes volume mascara', price: 99, image: './images/product8.jpg'},
    { id: '9', name: 'Bronzer', description: 'Add the perfect amount of depth to my skin bronzer', price: 49, image: './images/product9.jpg'},
    { id: '10', name:'Eye Shadow', description: 'Compliment my eye colour eye shadow', price: 119, image: './images/product10.jpg'},
   
  ],

};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        state.cartItems.push(product);
        state.totalPrice += product.price;
      }
    },
  },
});

export const { addToCart } = productSlice.actions;
export const selectProducts = state => state.products.products; // Selector for products
export const selectCartItems = state => state.products.cartItems; // Selector for cart items
export const selectTotalPrice = state => state.products.totalPrice; // Selector for total price
export default productSlice.reducer;

