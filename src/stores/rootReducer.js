import cartReducer from "./cart/cartSlice";
import { combineReducers } from "redux";
import productReducer from "./menu/productsSlice";
import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer
    }
);

export default rootReducer;