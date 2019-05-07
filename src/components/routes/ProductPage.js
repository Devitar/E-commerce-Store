import React from 'react';

//components
import store from '../store';
import {Link} from 'react-router-dom';

class ProductPage extends React.Component{

    render(){
        const product = store.getState().allProducts[Number(this.props.match.params.productId) - 1];
        console.log(product);
        return(
            <div className="productPage">
                <Link to="/">
                    Home
                </Link>
                {
                    product.title
                }
            </div>
        )
    }
}

export default ProductPage;