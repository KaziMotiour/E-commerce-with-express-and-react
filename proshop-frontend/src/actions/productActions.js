import axios from 'axios'
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODCUT_LIST_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS,PRODCUT_DETAIL_FAIL, } from '../constants/porductConstants'


export const listProduct = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('http://127.0.0.1:5000/api/porducts')
        dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})
         
    }catch(error){
        dispatch({
            
            type: PRODCUT_LIST_FAIL,
            
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        
        })
    }
}

export const detailProduct = (id) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAIL_REQUEST})
        const {data} = await axios.get(`http://127.0.0.1:5000/api/porducts/${id}`)
        dispatch({type:PRODUCT_DETAIL_SUCCESS, payload:data})
         
    }catch(error){
        dispatch({
            
            type: PRODCUT_DETAIL_FAIL,
            
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        
        })
    }
}