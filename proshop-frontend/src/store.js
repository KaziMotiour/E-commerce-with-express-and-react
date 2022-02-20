import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'

import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const cartItemsFormStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const initalState = {
    cart:{cartItems: cartItemsFormStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store