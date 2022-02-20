import {React, useEffect} from 'react'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Cart} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartAction'
import { productDetailReducer } from '../reducer/productReducer'

const CartScreen = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const qty = location.search ? Number(location.search.split('=')[1]):1

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log(cartItems);
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id, qty))
        }
    },[dispatch, id, qty])
  
  return (
    <div>
        dfg
    </div>
  )
}

export default CartScreen