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


const categoryConversion = {
    "headphones": "Headphones",
    "tv": "Televisions",
    "phone": "Phones",
    "action-camera": "Cameras",
    "watch": "Watches",
    "refrigerator": "Refrigerators"
  }

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
        let allProducts;
        if (!this.props.match.params.categoryName){
            allProducts = store.getState().allProducts.map((product, key) => {
                return(
                        <Grid.Column mobile={16} tablet={5} computer={3} key={key}>
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
                        </Grid.Column>
                )
            });
        }else{
            allProducts = store.getState().allProducts.map((product, key) => {
                if (product.category === this.props.match.params.categoryName){
                    return(
                            <Grid.Column mobile={16} tablet={5} computer={3} key={key}>
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
                            </Grid.Column>
                    )
                }else return null;
            });
        }
        if (!this.state.redirecting){
            let categoryTitle;
            if (!this.props.match.params.categoryName){
                categoryTitle = "All Products";
            } else {
                categoryTitle = categoryConversion[this.props.match.params.categoryName];
            }
            return(
                <div>
                    <PageTitle title={categoryTitle} />
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