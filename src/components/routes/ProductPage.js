import React from 'react';
import "../scss/ProductPage.css";

//components
import store from '../store';
import { Container, Image, Divider, Button, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Rating from '../Rating';
import Modal from '../Modal';
import Footer from '../Footer';

/* example data from api
    "id": 4,
    "title": "Apple - AirPods with Charging Case",
    "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
    "price": 149.99,
    "rating": 4.8,
    "category": "headphones"
*/

const defaultState = {
    showModal: false,
}

class ProductPage extends React.Component{
    state = {
        defaultState,
    }

    
    showCartModal(){
        this.setState({...this.state, showModal: true});
    }
    hideCartModal(){
        this.setState({...this.state, showModal: false});
    }
    handleClickCart(product){
        store.dispatch({type: "ADD_TO_CART", data: product.id})
        this.showCartModal(product)
    }
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
            return <Redirect to='/E-commerce-Store/404' />;
        }
        return(
            <div>
                <div className="productPage">
                    <Container className="mainContentProductPage">
                        <p className="productPageTitle">
                            {product.title}
                        </p>
                        <Divider className="productPageDivider" />
                        <Image src={product.img} className="productPageImage"/>
                        <Rating rating={product.rating} size={"huge"} />
                        {product.rating}
                        <p className="productPageDescription">
                            {product.description}
                        </p>
                        <Divider className="productPageDivider" />
                        <Button animated='vertical' onClick={() => this.handleClickCart(product)}>
                            <Button.Content visible>Add To Cart ({product.price})</Button.Content>
                            <Button.Content hidden>
                                <Icon name='shopping cart' />
                            </Button.Content>
                        </Button>
                    </Container>
                </div>
                <Modal open={this.state.showModal} onNoPress={() => this.hideCartModal()}/>
                <Footer />
            </div>
        )
    }
}

export default ProductPage;