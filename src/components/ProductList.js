import React from 'react';
import store from './store';

import './scss/ProductList.css';

//components
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Product from './Product';

const defaultState = {
    redirecting: false,
    redirectTo: null
}
class ProductList extends React.Component{
    state = {
        ...defaultState
    }
    abortController = new AbortController();

    componentDidMount(){
        if (!(store.getState().allProducts === [])){
            fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products', { signal: this.abortController.signal })
            .then(response => response.json())
            .then(data => 
                store.dispatch({type: "ADD_ALL_PRODUCTS", data: data})
            )
            .catch(err => {
                if (err.name === "AbortError") return
                throw err;
            })

            store.subscribe(() => {
                if (this.state.mounted){
                    this.forceUpdate();
                }
            })
        }
    }
    componentWillUnmount(){
        this.abortController.abort();
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
                            handleClickCart={() => {store.dispatch({type: "ADD_TO_CART", data: product.id})}}
                            rating={product.rating}
                        >
                        </Product>
                    {/* </Link> */}
                </Grid.Column>
            )
        });
        if (!this.state.redirecting){
            return(
                <Grid container className="productList">
                    {
                        allProducts
                    }
                </Grid>
            )
        }else{
            return(
                <Redirect to={`/product/${this.state.redirectTo}`} />
            )
        }
    }
}

export default ProductList;