import React, { Component } from 'react';

import Swal from 'sweetalert2';

import './style.css'

export default class CartItem extends Component {
    render() {

        let { item } = this.props;

        return(
            <>
                <tr>
                    <td className="table__id">
                        { item.product.id }
                    </td>
                    <td>
                        <strong>
                            {item.product.name}
                        </strong>
                    </td>

                    <td className="table__image">
                        <img src={ item.product.image } width="80px" height="60px" alt=""/>
                    </td>

                    <td className="table__quantity">
                        <button className="mx-1 quantity__button"
                            onClick = { () => this.onUpdateQuantity(item.product, item.quantity - 1) }
                        >
                            -
                        </button>
                        {item.quantity}
                        <button className="mx-1 quantity__button"
                            onClick = { () => this.onUpdateQuantity(item.product, item.quantity + 1) }
                        >
                            +
                        </button>
                    </td>
                    <td className="table__price">
                        $ { item.product.price }
                    </td>
                    <td>
                        $ { this.showSubToTal(item.product.price, item.quantity)}
                    </td>
                    <td >
                    <button type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        data-original-title="Remove item"
                        onClick = { () => { this.onDelete(item.product) }}
                    >
                    X
                    </button>
                </td>
                </tr>
            </>
        )
    }

    showSubToTal = (price, quantity) => {
        return price * quantity
    }

    onDelete(product) {
        let { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
        })

    }

    onUpdateQuantity = (product, quantity) => {
        let { onUpdateProductInCart } = this.props;

        if(quantity > 0) {
            onUpdateProductInCart(product, quantity);
        }
    }
}

