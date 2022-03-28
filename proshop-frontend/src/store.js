import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducer/userReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer
})

const cartItemsFormStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const   userInfoFormStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null



const initalState = {
    cart:{cartItems: cartItemsFormStorage},
    userLogin :{userInfo : userInfoFormStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 


