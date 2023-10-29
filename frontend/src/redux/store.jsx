import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice"; // Remove the destructuring
import sellerSlice from "./reducers/sellerSlice"; // Remove the destructuring
import productSlice from "./reducers/productSlice"; // Remove the destructuring
import eventSlice from "./reducers/eventSlice"; // Remove the destructuring
import cartSlice from "./reducers/cartSlice"; // Remove the destructuring
import wishlistSlice from "./reducers/wishlistSlice"; // Remove the destructuring
import orderSlice from "./reducers/orderSlice"; // Remove the destructuring

const Store = configureStore({
  reducer: {
    user: userSlice,
    seller: sellerSlice,
    products: productSlice,
    events: eventSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    order: orderSlice,
  },
});

export default Store;
