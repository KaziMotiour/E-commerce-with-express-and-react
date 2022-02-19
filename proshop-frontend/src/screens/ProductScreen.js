import {React, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'
import { detailProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    // const product = products.find(p => p._id===id)
    const productDetail = useSelector((state) => state.productDetail);
    const {loading, error, product} = productDetail
    useEffect(()=>{

        dispatch(detailProduct(id))
      }, [id])

  return (
    <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
    {loading && loading ? (
        <h2><Loader /></h2>
      ) : error ? 
      <div>
        {error}
        <Message varient='danger'>{error}</Message>
        </div>
       : (
    <Row>
        <Col md={6}>
            <Image src={product && product.image} alt={product && product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup varient='flush'>
                <ListGroup.Item>
                    <h2>{product && product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product && product.rating} text={`${product && product.numReviews} reviews`} color='gray' />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product && product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product && product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup varient='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${product && product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {product && product.countInStock>0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Button className='btn-block' type='button' disabled={product && product.countInStock===0}>
                            Add To Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>)}
    </>
  )
}

export default ProductScreen