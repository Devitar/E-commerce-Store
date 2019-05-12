import React from 'react';

//components
import { Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

/* example data from api
    "id": 4,
    "title": "Apple - AirPods with Charging Case",
    "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
    "price": 149.99,
    "rating": 4.8,
    "category": "headphones"
*/

const categoryConversion = {
  "headphones": "Headphones",
  "tv": "Televisions",
  "phone": "Phones",
  "action-camera": "Cameras",
  "watch": "Watches",
  "refrigerator": "Refrigerators"
}

const categoryOptions = [];

Object.keys(categoryConversion).forEach((v,i) => {
  const newName = categoryConversion[v];
  categoryOptions.push(
    // <Link to={"/E-commerce-Store/category/"} >
    {
      key: newName,
      text: newName,
      value: newName,
    }
    // </Link>
  )
})


const DropDownMenu = (props) => {

  return(
      <Dropdown
        placeholder='Select Category'
        fluid
        selection
        options={categoryOptions}
        // onChange={(e, data) => props.handleRedirect(data.value)}
      />
    )
}

export default DropDownMenu;