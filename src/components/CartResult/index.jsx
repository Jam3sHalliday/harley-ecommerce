import React, { Component } from 'react';
import { Modal, Button} from 'antd';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Swal from 'sweetalert2';

import './style.css';

export default class CartResult extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {

        let { cart } = this.props;

        let schema = yup.object().shape({
            fname: yup.string().required('*this field is required'),
            lname: yup.string().required('*this field is required'),
            email: yup.string().email('*email is invalid').required('*this field is required'),
            phoneNumber: yup.number().required('*this field is required'),
            address: yup.string().required('*this field is required'),
            cardNumber: yup.number().required('*this field is required')
        });

        return (
            <>
                <tr>
                    <td colSpan={4} />
                    <td>
                        <h4>
                            Cost
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong style = {{
                                fontSize: "20px"
                            }}>
                                ${this.showTotalAmount(cart)}
                            </strong>
                        </h4>
                    </td>
                    <td colSpan={3}>
                        <Button type="button"
                            className="btn__access"
                            onClick={this.showModal}
                        >
                            Purchase
                        <i className="fa fa-angle-right right" />
                        </Button>
                    </td>
                </tr>



                <Modal
                    title="Purchase"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer= { null }
                >

                    <Formik
                        initialValues = {{
                            fname: '',
                            lname: '',
                            phoneNumber: '',
                            email: "",
                            address: "",
                            cardNumber: ''
                        }}

                        validationSchema = { schema }

                        onSubmit={ this.onClickSubmit }
                    >
                        {
                            props => (
                                <Form className="form" action="">
                                    <div className="input-group">
                                        <Field type="text" id="fname" name = "fname" />
                                        <ErrorMessage name="fname">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="fname">First Name</label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="text" name = "lname" id="lname"   />
                                        <ErrorMessage name="lname">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="lname">Last Name</label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="phone" name = "phoneNumber" id="phoneNumber"   />
                                        <ErrorMessage name="phoneNumber">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="phoneNumber">Phone Number </label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="email"  name="email" id="email"   />
                                        <ErrorMessage name="email">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="text" name="cardNumber" id="cardNumber"   />
                                        <ErrorMessage name="cardNumber">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="address">Card Number</label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="text" name="address" id="address"   />
                                        <ErrorMessage name="address">
                                            {
                                                msg => <div className="alert alert-danger">
                                                        { msg }
                                                    </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="address">Address</label>
                                    </div>

                                    <div className="form__button">
                                        <button type="submit">
                                            Done
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </Modal>
            </>
        )
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

    onClickSubmit = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Make sure you submit exactly your information!",
            icon: 'question',
            showCancelButton: false,
            confirmButtonColor: 'rgba(48,133,214,0.8)',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Thanks for Purchasing!',
                    '',
                    'success'
                )
                localStorage.removeItem('CART');
                this.handleCancel();
            }
        })

    }
}
