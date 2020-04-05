import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../components/Products';
import Product from '../../components/Product';


//container này goiiigoij ở đâu
//sau để nó trong folder

class ProductsContainer extends Component {
    render() {
        let { hdStreet, sportsters, softails, cvos } = this.props;
        
        return (
            <Products>
                { this.showProducts(hdStreet) }
            </Products>
        )
    }

    showProducts(products){
    let result = null;
    if(products.length > 0) {
        result = products.map((product, index) => {
            return <Product
            product = { product } 
            key = { index } 

            />
        })
    }
    return result;
}

}

const mapStateToProps = state => ({
    hdStreet: state.products.hdStreet,
    sportsters: state.products.sportsters,
    softails: state.products.softails,
    cvos: state.products.cvos,
})

export default connect( mapStateToProps, null )( ProductsContainer );