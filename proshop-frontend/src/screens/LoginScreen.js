import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {login} from '../actions/userAction'
import {useHistory, useLocation} from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const redirect = location.search ? location.search.split('=')[1]:'/'

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])
    
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
        <div>
        <h1>Sing in</h1>
        {error && <Message varient='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary">
                Sing In
            </Button>

        </Form>
        <Row className='py-3'>
            <Col>
                New Customer? <Link to='/register'  >Register</Link>
            </Col>
        </Row>
        </div>  
  )
}

export default LoginScreen