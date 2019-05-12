import React from 'react';
// import '../scss/Category.css';
import '../scss/ProductList.css';

//components
import store from '../store';
import { Redirect } from 'react-router-dom';
import { Grid, Divider } from 'semantic-ui-react';
import Product from '../Product';
import Modal from '../Modal';
import PageTitle from '../PageTitle';
import Footer from '../Footer';

const defaultState = {
    showModal: false,
}


class Category extends React.Component{
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
        let catProducts = store.getState().allProducts.map((product, key) => {
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
        if (!this.state.redirecting){
            return(
                <div>
                    <PageTitle title="All Items" />
                    <Divider className="productPageDivider" />
                    <Grid container className="productList">
                        {
                            catProducts
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

export default Category;