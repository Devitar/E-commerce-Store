import React from 'react';

//components
import Product from './Product';

class ProductList extends React.Component{

    render(){
        return(
            <div>
                ProductList
                <Product />
            </div>
        )
    }
}

export default ProductList;