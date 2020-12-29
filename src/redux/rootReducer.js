import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import uiReducer from './ui/uiReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Create persistConfig for our modified rootReducer, starting from our most BASE state(the root)
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  ui: uiReducer,
  products: productsReducer
});

//Exporting modified rootReducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);