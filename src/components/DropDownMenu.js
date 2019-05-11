import React from 'react';

//components
import { Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import store from './store';

const categoryOptions = [
  {
    key: 'Phones',
    text: 'Phones',
    value: 'Phones',
  },
]



const DropDownMenu = () => {
  return(
    <Dropdown
      placeholder='Select Category'
      fluid
      selection
      options={categoryOptions}
    />
  )
}

export default DropDownMenu;