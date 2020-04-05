import React, { Component } from 'react';

import './style.css';

import { Link } from 'react-router-dom';  

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Fade } from 'react-reveal'
import Swal from 'sweetalert2';

import { userService } from '../../services'
import Header from '../Header';
import Footer from '../Footer';


export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignup: false,
        }
    }

    handleSubmit = values => {
        userService.signUp(values)
        .then( res => {
            if(res.data.taiKhoan !==""){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign Up Completed!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.props.history.push("/login") 
            }
        })
        .catch( err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Account or Email is already used',
                showConfirmButton: false,
                timer: 1500
            })
        });

    }
    render() {


        let schema = yup.object().shape({
                taiKhoan: yup.string().required('*this field is required'),
                matKhau: yup.string().required('*this field is required'),
                email: yup.string().email('*email is invalid').required('*this field is required'),
                hoTen: yup.string().required('*this field is required'),
                soDT: yup.string().required('*this field is required')
            });
            
        return (
            <>
            <Header />
            <div className="signupForm">
                        <div className="container">
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: '',
                            hoTen: '',
                            soDT: '',
                            maNhom: 'GP12',
                            email: '',
                        }}

                        validationSchema={ schema }

                        onSubmit={ this.handleSubmit }
                    >
                        {
                            props => (
                                <Form className="form" action="">
                                    <Fade delay = { 800 } top>
                                        <div className="form__title">
                                            <h2 className="font-weight-bold mb-4">
                                                Sign Up Now 
                                                <br/>
                                                For Free!
                                            </h2>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay = { 1400 }>
                                    <div className="input-group">
                                        <Field type="text" id="hoTen" name="hoTen" required onChange = { props.handleChange } />
                                        <ErrorMessage name="hoTen">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="hoTen">Full Name</label>
                                    </div>
                                    </Fade>
                                    <Fade bottom delay = { 1800 }>
                                    <div className="input-group">
                                        <Field type="email" id="email" name="email" required onChange = { props.handleChange } />
                                        <ErrorMessage name="email">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    </Fade>
                                    <Fade bottom delay = { 2000 }>
                                    <div className="input-group">
                                        <Field type="text" id="soDT" name="soDT" required onChange = { props.handleChange } />
                                        <ErrorMessage name="soDT">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="soDT">Phone Number</label>
                                    </div>
                                    </Fade>
                                    <Fade bottom delay = { 2200 }>
                                    <div className="input-group">
                                        <Field type="text" id="taiKhoan" name="taiKhoan" required onChange = { props.handleChange } />
                                        <ErrorMessage name="taiKhoan">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="taiKhoan">Account</label>
                                    </div>
                                    </Fade>
                                    <Fade bottom delay = { 2400 }>
                                    <div className="input-group">
                                        <Field type="password" name="matKhau" id="matKhau" required onChange = { props.handleChange } />
                                        <ErrorMessage name="matKhau">
                                            {
                                                msg => <div className="alert__message">
                                                    {msg}
                                                </div>
                                            }
                                        </ErrorMessage>
                                        <label htmlFor="matKhau">Password</label>
                                    </div>
                                    </Fade>
                                    <Fade bottom delay = { 2600 }>
                                    <div className="form__button">
                                        <button type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                    </Fade>
                                    <div className="form__support">
                                    <Fade bottom delay = { 3000 }>
                                        <p>
                                            Already have an account?
                                            <Link to="/login" className="button__router"> Sign In </Link>
                                            now!
                                        </p>
                                        </Fade>

                                        <Fade bottom delay = { 3200 }>
                                        <div className="form__notice text-center">

                                            <h4 className="text-white form__notice--title">NOTICE: </h4>
                                            <div className="form__notice--reason">
                                                <p>Thanks you for noticing this new notice. Your noticing it has been noted!</p>
                                                <p>
                                                    'asd' or '123' sometime can not be used, maybe they are already used by the other!
                                                </p>
                                            </div>
                                        </div>
                                    </Fade>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}
