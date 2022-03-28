import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, UpdateUserProfile} from '../actions/userAction'
import {useHistory, useLocation} from 'react-router-dom'

const ProfileScreen = () => {
    const location = useLocation()
    const dispatch = useDispatch()
  
    const history = useHistory()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [message, setMessage]=useState(null)
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails
    
    const userUpdateDetails = useSelector(state => state.userUpdateProfile)
    const {loading,success, error} = userUpdateDetails

   
    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
    
            }
        }
    },[dispatch, history, userInfo, user])

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !==confirmPassword){
            setMessage('Password do not matched')
        }else{
        //    update profile
        dispatch(UpdateUserProfile({id: user._id, name, email, password}))
    }
    }

  
  return (
        <Row  >
            <Col md={3}>
            <h2>User Profile</h2>
        {error && <Message varient='danger'>{error}</Message>}
        {message && <Message varient='danger'>{message}</Message>}
        {success && <Message varient='success'>"success fully updated"</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' value={name && name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email'value={email && email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}>

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
                Update
            </Button>

        </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row> 
  )
}

export default ProfileScreen