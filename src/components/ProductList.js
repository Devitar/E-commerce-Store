import React from 'react';
import store from './store';

import './scss/ProductList.css';
//components
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

    render(){
        let allProducts = store.getState().allProducts.map((product, key) => 
        (
            <Product productObj={product} key={key}/>
        ))
        return(
            <div className="allProducts">
                {
                    allProducts
                }
            </div>
        )
    }
}

export default ProductList;