import React, { Component } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';

import './style.css';


class ModalForm extends Component {


    handleSubmit = values => {
        console.log(values)
    }
    
    render() {
        let schema = yup.object().shape({
                // hoTen: yup.string().required('*this field is required'),
                // taiKhoan: yup.string().required('*this field is required'),
                // soDT: yup.string().required('*this field is required'),
                // matKhau: yup.string().required('*this field is required'),
                // email: yup.string().email('*email is in valid').required('*this field is required'),
        });

        let user = JSON.parse(localStorage.getItem('user'));
            
        return (
            
            <section className="modalForm">
                <div className="container">
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: '',
                            hoTen: '',
                            soDT: '',
                            email: '',
                            maNhom: 'GP12',
                            maLoaiNguoiDung: 'HV'
                        }}

                        validationSchema={schema}

                        onSubmit = { this.handleSubmit }
                    >
                        {
                            props => (
                                <Form className ="form" action="">

                                    <div className="input-group">
                                        <Field type="text" id="hoTen" name="hoTen"  onChange = { props.handleChange } placeholder = { user.hoTen} />
                                        <ErrorMessage name="hoTen">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="hoTen">Your Name: </label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="text" id="taiKhoan" name="taiKhoan"  onChange = { props.handleChange } placeholder = { user.taiKhoan} />
                                        <ErrorMessage name="taiKhoan">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="taiKhoan">Your Account: </label>
                                    </div>


                                    <div className="input-group">
                                        <Field type="password" name="matKhau" id="matKhau" placeholder="*************"  onChange = { props.handleChange } />
                                        <ErrorMessage name="matKhau">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="matKhau">Password: </label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="email" name="email" id="email" required  onChange = { props.handleChange }   placeholder = { user.email} />
                                        <ErrorMessage name="email">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="email">Email: </label>
                                    </div>

                                    <div className="input-group">
                                        <Field type="number" name="soDT" id="soDT" required  onChange = { props.handleChange }   placeholder = { user.soDT} />
                                        <ErrorMessage name="soDT">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="soDT">Phone Number: </label>
                                    </div>

                                    <div className="form__button">
                                        <button type="submit">
                                            Ok!
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </section>

        )
    }
}


export default ModalForm;