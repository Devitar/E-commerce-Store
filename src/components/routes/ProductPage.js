import React from 'react';
import "../scss/ProductPage.css";

//components
import store from '../store';
import { Container, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

/* example data from api
    "id": 4,
    "title": "Apple - AirPods with Charging Case",
    "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
    "price": 149.99,
    "rating": 4.8,
    "category": "headphones"
*/
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
        if (!product){
            return <Redirect to='/404' />;
        }
        return(
            <div className="productPage">
                <Container className="mainContentProductPage">
                    <p className="productTitle">
                        {product.title}
                    </p>
                    {/* <div className="productPageImageContainer"> */}
                        <Image src={product.img} className="productPageImage"/>
                    {/* </div> */}
                </Container>
            </div>
        )
    }
}

export default ProductPage;