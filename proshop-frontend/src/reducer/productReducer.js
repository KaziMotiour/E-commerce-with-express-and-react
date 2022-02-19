
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODCUT_LIST_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS,PRODCUT_DETAIL_FAIL} from '../constants/porductConstants'

export const productListReducer = (state={products:[]}, action) =>{
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':return{loading: true, products:[]}
        case 'PRODUCT_LIST_SUCCESS': return{loading:false, products: action.payload}
        case 'PRODCUT_LIST_FAIL': return {loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDetailReducer = (state={product:[]}, action) =>{
    switch(action.type){
        case 'PRODUCT_DETAIL_REQUEST':return{loading: true, ...state}
        case 'PRODUCT_DETAIL_SUCCESS': return{loading:false, product: action.payload}
        case 'PRODCUT_DETAIL_FAIL': return {loading:false, error: action.payload}
        default:
            return state
    }
}