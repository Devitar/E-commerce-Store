import React from 'react';
import store from './store';
//components
import Product from './Product';

class ProductList extends React.Component{
    componentWillMount(){
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            store.dispatch({type: "ADD_ALL_PRODUCTS", data: data})
        })
        store.subscribe(() => this.forceUpdate());
    }

    render(){
        let test = store.getState().allProducts.map((product) => 
        (
            <Product productObj={product} />
        ))
        return(
            <div>
                {
                    test
                }
            </div>
        )
    }
}

export default ProductList;