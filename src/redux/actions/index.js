import * as types from '../constants/ActionTypes';

export const actionAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    }
}


export const actionRemoveProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actionUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}

export const actionLoggedInUser = (user) => {
    return {
        type: types.LOGGED_IN_USER,
        user,
    }
}