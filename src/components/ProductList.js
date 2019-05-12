import React from 'react';
import store from './store';

import './scss/ProductList.css';

//components
import { Redirect } from 'react-router-dom';
import { Grid, Divider } from 'semantic-ui-react';
import Product from './Product';
import Modal from './Modal';
import PageTitle from './PageTitle';
import Footer from './Footer';

const defaultState = {
    redirecting: false,
    redirectTo: null,
    showModal: false,
}
class ProductList extends React.Component{
    state = {
        ...defaultState
    }

    showCartModal(){
        this.setState({...this.state, showModal: true});
    }
    hideCartModal(){
        this.setState({...this.state, showModal: false});
    }

    render(){
        let allProducts = store.getState().allProducts.map((product, key) => {
            return(
                    <Grid.Column mobile={16} tablet={5} computer={3} key={key}>
                        {/* <Link to={`/product/${product.id}`}> */}
                            <Product
                                productObj={product} 
                                handleClick={() => {
                                    store.dispatch({type: "SELECT_PRODUCT", data: product.id});
                                    this.setState({redirecting: true, redirectTo: product.id});
                                }}
                                handleClickCart={() => {
                                    store.dispatch({type: "ADD_TO_CART", data: product.id})
                                    this.showCartModal(product)
                                }}
                                rating={product.rating}
                            >
                            </Product>
                        {/* </Link> */}
                    </Grid.Column>
            )
        });
        if (!this.state.redirecting){
            return(
                <div>
                    <PageTitle title="All Items" />
                    <Divider className="productPageDivider" />
                    <Grid container className="productList">
                        {
                            allProducts
                        }
                        <Modal open={this.state.showModal} onNoPress={() => this.hideCartModal()}/>
                    </Grid>
                    <Footer />
                </div>
            )
        }else{
            return(
                <Redirect to={`/E-commerce-Store/product/${this.state.redirectTo}`} />
            )
        }
    }
}

export default ProductList;