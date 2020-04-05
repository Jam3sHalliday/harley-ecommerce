import React, { Component } from 'react';


import './style.css';

import { Link } from 'react-router-dom';  

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';

import { Fade } from 'react-reveal';

import { connect } from 'react-redux';
import { userService } from '../../services';

import { actionLoggedInUser } from '../../redux/actions';
import Header from '../Header';
import Footer from '../Footer';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: false,
            username: ''
        }
    }

    render() {
        let handleSubmit = values => {

            userService.logIn(values)

            .then( res => {
                let { onLoggedInUser } = this.props;
                onLoggedInUser(res.data)
                if(res.data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Sign Up Completed!',
                        showConfirmButton: false,
                        timer: 1200
                    });
                    this.setState({
                        username: res.data.hoTen
                    })
                    localStorage.setItem('user', JSON.stringify(res.data));
                    this.props.history.push('/');
                }
            })

            .catch( err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Account or Password is incorrect!',
                    showConfirmButton: false,
                    timer: 1200
                });
                console.log(err);
            })
    
        }

        let schema = yup.object().shape({
                taiKhoan: yup.string().required('*this field is required'),
                matKhau: yup.string().required('*this field is required'),
            });
            return (
            <>
            <Header username = { this.state.username } />
            <section className="loginForm">
                <div className="container">
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: ''
                        }}
                        validationSchema={schema}
                        onSubmit={ handleSubmit }
                    >
                        {
                            props => (
                                <Form className="form" method="POST">
                                    <Fade top delay = { 800}>
                                    <h2 className="font-weight-bold mb-4">
                                        Welcome!
                                    </h2>
                                    </Fade>
                                    <Fade bottom delay = { 1400 }>
                                    <div className="input-group">
                                        <Field type="text" id="taiKhoan" name="taiKhoan"  onChange = { props.handleChange } />
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
                                    <Fade bottom delay = { 1600}>
                                    <div className="input-group">
                                        <Field type="password" name="matKhau" id="matKhau"  onChange = { props.handleChange } />
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
                                    <Fade bottom delay = { 2000}>
                                    <div className="form__button">
                                        <button type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                    </Fade>
                                    <Fade top delay = { 3000 }>
                                    <div className="form__support">
                                        <p>
                                            Don't have any account?
                                            <Link to="/signup" className="button__router"> Sign Up </Link>
                                            now!
                                        </p>
                                    </div>
                                    </Fade>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </section>
            <Footer />
            </>
        )
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoggedInUser: (user) => {
            dispatch(actionLoggedInUser(user))
        },
        
    }
}

export default connect ( null, mapDispatchToProps )( LoginForm );