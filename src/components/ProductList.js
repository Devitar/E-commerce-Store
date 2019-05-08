import React from 'react';
import store from './store';

import './scss/ProductList.css';

//components
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Product from './Product';

class ProductList extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this._isMounted = false;
    // }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
        .then(response => response.json())
        .then(data => 
            store.dispatch({type: "ADD_ALL_PRODUCTS", data: data})
        )
        store.subscribe(() => this.forceUpdate());
    }

    render(){
        let allProducts = store.getState().allProducts.map((product, key) => {
            return(
                <Grid.Column mobile={16} tablet={5} computer={3} key={key}>
                    <Link to={`/product/${product.id}`}>
                        <Product 
                        productObj={product} 
                        onClick={() => {store.dispatch({type: "SELECT_PRODUCT", data: product.id})}
                
                        }></Product>
                    </Link>
                </Grid.Column>
            )
        });

        return(
            <Grid container className="productList">
                {
                    allProducts
                }
            </Grid>
        )
    }
}

export default ProductList;