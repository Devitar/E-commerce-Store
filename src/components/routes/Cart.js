import React from 'react';
import '../scss/Cart.css';

//components
import store from '../store';
import { Container, Image, Divider, Button, Icon } from 'semantic-ui-react';
import PageTitle from '../PageTitle';

/* example data from api
    "id": 4,
    "title": "Apple - AirPods with Charging Case",
    "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
    "price": 149.99,
    "rating": 4.8,
    "category": "headphones"
*/

class Cart extends React.Component{
    
    handleClick(obj, i){
        console.log(obj, i);
        store.dispatch({type: "REMOVE_FROM_CART", data: i});
        this.forceUpdate();
    }

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
        return(storeState.cart.map((itemId, i) => {
            const productInfo = this.getItemFromId(itemId, storeState.allProducts);
            return(
                <div className="cartProduct" key={i}>
                    <div className="cartContent">
                        <div className="imageContainerCart">
                            <img src={productInfo.img} className="cartItemImg" />
                        </div>
                        <span className="cartItemTitle">{productInfo.title}</span>
                    </div>
                    <Button animated='horizontal' onClick={() => this.handleClick(productInfo, i)}>
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
                <PageTitle title="Your Cart" />
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