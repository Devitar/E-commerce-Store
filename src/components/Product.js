import React from 'react';
import './scss/Product.css';

//components
import { Image, Icon } from 'semantic-ui-react';
import Rating from './Rating';

/* example data from api
    "id": 4,
    "title": "Apple - AirPods with Charging Case",
    "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
    "price": 149.99,
    "rating": 4.8,
    "category": "headphones"
*/

const Product = (props) => {
    return(
        <div className="productWrapper">
            <div className="productMain" onClick={props.handleClick}>
                <div className="imageContainerProduct" >
                    <Image className="productImage" src={props.productObj.img} rounded centered size='tiny' />
                </div>
                <div className="productContent">
                    <p className="productText">${props.productObj.price}</p>
                    <p className="productTitle">{props.productObj.title}</p>
                </div>
                <div className="productFooter">
                    <div className="productRatingBox">
                        <Rating rating={props.rating} />
                        {props.rating}
                    </div>
                </div>
            </div>
            <Icon name="shopping cart" size="big" onClick={props.handleClickCart} className="productCartIcon"/>
        </div>
    )
}

export default Product;