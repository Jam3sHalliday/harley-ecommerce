import React, { Component } from 'react';

import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import Swal from 'sweetalert2';


import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';

import './style.css';


class Product extends Component {
    
    render() {
        let { product } = this.props;
        
        const content = (
            <>
                <div className="products image">
                    <img className="thumbnail__image" src={product.image} alt="asd" />
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Information</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>${product.price}</td>
                        </tr>
                        <tr>
                            <td>Cylinder Capacity</td>
                            <td>{product.engine} cc</td>
                        </tr>
                        <tr>
                            <td>Torque</td>
                            <td>{product.torque}</td>
                        </tr>
                    </tbody>
                </table>



                <div className="add">
                    <button className=" btnAddToCart btn btn-primary"
                        type="primary" 
                        onClick = { 
                            () => { 
                                this.onAddToCart(product);
                            }
                        }
                    >
                        Add To Cart
                    </button>
                </div>
            </>
        );

        return (
            <div className="card col-lg-4 col-md-6 my-3">
                <img className="card-img-top img" src={product.image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <Popover placement="right" content={content} title= {product.name} trigger="hover">
                        <Button>i</Button>
                    </Popover>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'This Product Is Added To Cart',
            showConfirmButton: false,
            timer: 1300
        })
    }
}

export default Product;