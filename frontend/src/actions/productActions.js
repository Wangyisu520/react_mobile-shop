import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL ,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL 
} from '../constents/productConstents'
import axios from 'axios'

//获取所有产品action
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        })
        const { data } = await axios.get("/api/products")
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            paylod: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            paylod: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//获取单个产品action
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            paylod: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            paylod: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}