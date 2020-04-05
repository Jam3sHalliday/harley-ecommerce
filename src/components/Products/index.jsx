import React, { Component } from 'react';
import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Fade, Zoom } from 'react-reveal';

import Product from '../Product';
import { actionAddToCart } from '../../redux/actions'


import './style.css';
import Header from '../Header';

export class Products extends Component {
    
    render() {
        const { TabPane } = Tabs;
        let { hdStreet, sportsters, softails, tourings, cvos } = this.props;

        return (
            <>
            <Header />
            <section className="products">
                <div className="container">
                    <Fade top delay = { 800 }>
                    <div className="products__title">
                        Products
                    </div>
                    </Fade>
                    <Zoom  delay = { 1200 }>
                    <div className="products__tab">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="HD - STREET" key="1">
                                <div className="row">
                                    { this.showProducts(hdStreet) }
                                </div>
                            
                            </TabPane>
                            <TabPane tab="SPORTSTERS" key="2">
                                <div className="row">
                                    { this.showProducts(sportsters) }
                                </div>
                            </TabPane>
                            <TabPane tab="SOFTAILS" key="3">
                                <div className="row">
                                    { this.showProducts(softails) }
                                </div>
                            </TabPane>
                            <TabPane tab="TOURINGS" key="4">
                                <div className="row">
                                    { this.showProducts(tourings) }
                                </div>
                            </TabPane>
                            <TabPane tab="CVOS" key="5">
                                <div className="row">
                                    { this.showProducts(cvos) }
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    </Zoom>
                </div>
            </section>
            </>
        );
    }

    showProducts(products){
        let result = null;
        if(products.length > 0) {
            let { onAddToCart, onUpdateProductInCart } = this.props;

            result = products.map((product, index) => {
                return <Product
                product = { product } 
                key = { index } 
                onAddToCart = { onAddToCart }
                onUpdateProductInCart = { onUpdateProductInCart }
                // onChangeMessage = { onChangeMessage }
                />
            })
        }
        return result;
    }

}

const mapStateToProps = state => ({
    hdStreet: state.products.hdStreet,
    sportsters: state.products.sportsters,
    tourings: state.products.tourings,
    softails: state.products.softails,
    cvos: state.products.cvos,
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionAddToCart(product, 1));
        },

        // onChangeMessage: (message) => {
        //     dispatch(actionChangeMessage(message));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);