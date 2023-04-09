import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { productReducer } from "./products/reducer";

const combine = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
});

const Store = legacy_createStore(combine, applyMiddleware(thunk));

console.log(Store.getState());
export { Store };
