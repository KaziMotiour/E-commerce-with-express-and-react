import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailReducer} from './reducer/productReducer'

import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer
})
  
const initalState = {}
const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store