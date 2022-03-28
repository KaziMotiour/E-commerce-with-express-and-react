import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {register, getUserDetails} from '../actions/userAction'
import {useHistory, useLocation} from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [message, setMessage]=useState(null)
    const redirect = location.search ? location.search.split('=')[1]:'/'

    const userRegister = useSelector(state => state.userRegister)
    const {loading, userInfo, error} = userRegister
    console.log(userRegister);
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !==confirmPassword){
            setMessage('Password do not matched')
        }else{
        dispatch(register(name, email, password))
    }
    }

  
  return (
        <div>
        <h1>Sing in</h1>
        {error && <Message varient='danger'>{error}</Message>}
        {message && <Message varient='danger'>{message}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

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
            <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary">
                Sing up
            </Button>

        </Form>
        <Row className='py-3'>
            <Col>
                Already have an account? <Link to='/login'>Login</Link>
            </Col>
        </Row>
        </div>  
  )
}

export default RegisterScreen