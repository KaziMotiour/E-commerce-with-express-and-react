import {React, useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts]=useState()
  useEffect(()=>{

    const fetchProduct = async () => {
      const {data} = await axios.get('http://127.0.0.1:5000/api/porducts')
      setProducts(data)
    }
    fetchProduct()
  }, [])
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
            {products && products.map(product=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}

      </Row>
    </>
  );
};

export default HomeScreen;
