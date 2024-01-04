import { combineReducers, legacy_createStore as createStore } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export function configureStore() {
  return createStore(rootReducer);
}
