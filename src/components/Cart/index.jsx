import React, { Component } from 'react'
import './style.css';

import { Fade } from 'react-reveal';
import Header from '../Header';
import Footer from '../Footer';

export default class Cart extends Component {
    render() {
        return (
            <>
            <Header />
            <section className="cart">
                <div className="container">
                    <Fade delay = { 1000 } top>
                    <div className="title mt-5 mb-5 text-center">
                        <h4 style={{  fontSize: "42px", letterSpacing: "3px", fontFamily: "righteous" }}>
                            Cart
                        </h4>
                    </div>
                    </Fade>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className = "table__id" >ID</th>
                                <th className = "table__name" >Name</th>
                                <th className = "table__image" >Image</th>
                                <th className = "table__quantity" >Quantity</th>
                                <th className = "table__unitPrice" >Unit Price</th>
                                <th className = "table__totalPrice" >Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.children }
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
            </>
        )
    }
}
