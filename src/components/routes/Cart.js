import React from 'react';
import '../scss/Cart.css';

//components
import store from '../store';
import { Container, Image, Divider, Button, Icon } from 'semantic-ui-react';

class Cart extends React.Component{
    
    getItemFromId(id, products){
        let product;
        products.forEach(v => {
            if (v.id === id){
                product = v;
            }
        })
        if (!product){
            return null;
        }else return product;
    }
    renderCartItems(){
        const storeState = store.getState();
        return(storeState.cart.map(itemId => {
            const productInfo = this.getItemFromId(itemId, storeState.allProducts);
            return(
                <div>
                    {productInfo.title}
                    <Button animated='horizontal'>
                        <Button.Content hidden>Delete</Button.Content>
                        <Button.Content visible>
                        <Icon name='trash alternate' />
                        </Button.Content>
                    </Button>
                </div>
            )
        }))
    }
    render(){
        return(
            <div className="cartMain">
                <Container className="mainContentCart">
                    <Divider className="productPageDivider" />
                    {/* <Image src={product.img} className="productPageImage"/> */}
                    <Container className="cartItems" >
                        {this.renderCartItems()}
                    </Container>
                    <Divider className="productPageDivider" />
                </Container>
            </div>
        )
    }
}

export default Cart;