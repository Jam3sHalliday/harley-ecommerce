import React, { Component } from 'react';
import { FaHeart, FaKeyboard } from 'react-icons/fa';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__title text-white text-center py-3">
                        <p>Special Thanks To: </p>
                    </div>
                    <div className="row">
                        
                        <div className="col-3">
                            <div className="footer__logo">
                                <img src="https://cdn.dribbble.com/users/2037940/screenshots/6228108/google-logo.png" 
                                style={{ width: '60px', height: '40px'}}
                                alt=""/>
                            </div>
                            <div className="footer__logo--title">
                                <a href="https://www.google.com">
                                    Google
                                </a>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="footer__logo">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>

                            <div className="footer__logo--title">
                                <a href="https://www.stackoverflow.com">
                                    StackOverflow
                                </a>
                            </div>

                        </div>

                        <div className="col-3">
                            <div className="footer__logo">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>

                            <div className="footer__logo--title">
                                <a href="https://www.github.com">
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="col-3  my-cat">
                            <div className="footer__logo">
                                <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/91157891_267950250867898_4819129842152767488_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=pf6eEjrzVjkAX8fdz3J&_nc_ht=scontent-hkt1-1.xx&oh=a8cb8e81295d987dd3fc312594dc9424&oe=5EA75FC4" alt="" title="HE JUST LEAVE ME ALONE xD" />
                            </div>

                            <div className="footer__logo--title text-white">
                                <p>
                                    MY powerful CAT
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="footer__subtitle text-white text-center">
                        <p>Made with <FaHeart className="icon" /> and  <FaKeyboard />
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
