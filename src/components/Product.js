import React from 'react';
import './scss/Product.css';

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
        <div className="productMain">
            <img className="productImage" src={props.productObj.img} alt="Product Image" />
            <h1 className="productTitle">{props.productObj.title}</h1>
            <p className="productText">{props.productObj.price}</p>
        </div>
    )
}

export default Product;