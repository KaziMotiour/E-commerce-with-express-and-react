import {React, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'



const ProductScreen = () => {
    const {id} = useParams()
    // const product = products.find(p => p._id===id)
    const [product, setProduct]=useState()
    useEffect(()=>{

        const fetchProduct = async () => {
          const {data} = await axios.get(`http://127.0.0.1:5000/api/porducts/${id}`)
          console.log(data, 'dataa');
          setProduct(data)
        }
        fetchProduct()
      }, [id])

  return (
    <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
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
    </Row>
    </>
  )
}

export default ProductScreen