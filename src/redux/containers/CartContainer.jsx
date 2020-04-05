import React, { Component } from 'react';

import { connect } from 'react-redux'; 

import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import CartResult from '../../components/CartResult';
import CartItem from '../../components/CartItem';
import Cart from '../../components/Cart';

import { actionRemoveProductInCart, actionUpdateProductInCart } from '../actions';


class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            justRerender: false
        }
    }
    render() {
        let { cart } = this.props;

        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        )
    }

    showCartItem = (cart) => {
        let result = <tr>
            <td></td>
            <td></td>
            <td></td>
            <Fade bottom delay = { 1200}>
            <td style={{fontSize: "18px"}} className="font-weight-bold">
                Nothing In Cart, 
                <Link to="/products"> Store </Link>
                    Now!
            </td>
            </Fade>
        </tr>

        let { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        no = { index }
                        key = { index }
                        item = { item }
                        onDeleteProductInCart = { onDeleteProductInCart }
                        onUpdateProductInCart = { onUpdateProductInCart }
                    />
                )
            })
        }
        return result
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={ cart } onReRender = { this.onReRender } />
        }
        return result;
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})


const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actionRemoveProductInCart(product));
        },

        onUpdateProductInCart: (product, quantity) => {
            dispatch(actionUpdateProductInCart(product, quantity));
        }
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( CartContainer );