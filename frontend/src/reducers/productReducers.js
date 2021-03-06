import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL ,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL 
    } from '../constents/productConstents'

//获取所有产品的reducer
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.paylod
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.paylod
            }
        default:
            return state;
    }
}

//获取单个产品的reducer
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: {}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.paylod
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.paylod
            }
        default:
            return state;
    }
}