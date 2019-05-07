import React from 'react';

//components
import store from '../store';
import {Link} from 'react-router-dom';

class ProductPage extends React.Component{

    render(){
        const currentProductId = Number(this.props.match.params.productId);
        const allProducts = store.getState().allProducts;
        let product;
        allProducts.forEach((v,i) => {
            if (v.id === currentProductId){
                product = v;
            }
        })
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