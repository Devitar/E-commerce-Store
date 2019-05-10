import React from 'react';
import '../scss/Cart.css';

//components
import store from '../store';
import { Container, Image, Divider, Button, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class Cart extends React.Component{
    render(){
        // const currentProductId = Number(this.props.match.params.productId);
        // const allProducts = store.getState().allProducts;
        // let product;
        // allProducts.forEach((v,i) => {
        //     if (v.id === currentProductId){
        //         product = v;
        //     }
        // })
        // if (!product){
        //     return <Redirect to='/404' />;
        // }
        return(
            <div className="cartMain">
                <Container className="mainContentCart">
                    <Divider className="productPageDivider" />
                    {/* <Image src={product.img} className="productPageImage"/> */}
                    <Container className="cartItems" >
                        Cart Items
                    </Container>
                    <Divider className="productPageDivider" />
                    <Button animated='vertical'>
                        {/* <Button.Content visible>Add To Cart ({product.price})</Button.Content> */}
                        <Button.Content hidden>
                            <Icon name='shopping cart' />
                        </Button.Content>
                    </Button>
                </Container>
            </div>
        )
    }
}

export default Cart;