import React from 'react';
import "../scss/ProductPage.css";

//components
import store from '../store';
import { Container, Image } from 'semantic-ui-react';

class ProductPage extends React.Component{

    render(){
        const currentProductId = Number(this.props.match.params.productId);
        const allProducts = store.getState().allProducts;
        let product = {
            title: "ERROR: NO PRODUCT FOUND",
            
        }
        allProducts.forEach((v,i) => {
            if (v.id === currentProductId){
                product = v;
            }
        })
        return(
            <div className="productPage">
                <Container className="mainContentProductPage">
                    <div className="productPageImageContainer">
                        <Image />
                    </div>
                    <p className="productTitle">
                        {product.title}
                    </p>
                </Container>
            </div>
        )
    }
}

export default ProductPage;