import React from 'react';
import store from './store';

import './scss/ProductList.css';

//components
import { Grid } from 'semantic-ui-react';
import Product from './Product';

class ProductList extends React.Component{
    componentWillMount(){
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
        .then(response => response.json())
        .then(data => 
            store.dispatch({type: "ADD_ALL_PRODUCTS", data: data})
        )
        store.subscribe(() => this.forceUpdate());
    }

    onProductClick(){
        console.log('clicked');
    }

    render(){
        let allProducts = store.getState().allProducts.map((product, key) => {
            return(
                <Grid.Column mobile={16} tablet={5} computer={3} key={key}>
                    <Product productObj={product} onClick={() => {console.log('clicked', product.id)}}/>
                </Grid.Column>
            )
        });

        return(
            <Grid container>
                {
                    allProducts
                }
            </Grid>
        )
    }
}

export default ProductList;